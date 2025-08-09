import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import { supabase } from "../supabaseClient.tsx";
import type { AuthError, User,  AuthChangeEvent,Session } from '@supabase/supabase-js';

// 1. Define the shape of your context's value (Crucial for TypeScript)

type SignUpResult = {
    success: true;
    data: { user: User | null; session : Session| null };
} | {
    success: false;
    error: AuthError;
};

type SignInResult = {
    success: true;
    data: { user: User | null; session: Session| null; };
} | {
    success: false;
    error: string;
};

export interface ThemeContextType {
    currentMode: "light" | "dark";
    setCurrentMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    toggleTheme: () => void;
    activeBar: boolean;
    setActiveBar: React.Dispatch<React.SetStateAction<boolean>>;
    signUpNewUsers: (email: string, password: string,name:string) => Promise<SignUpResult>;
    signInUser: (email: string, password: string) => Promise<SignInResult>;
    signOut: () => Promise<void>;
    session: Session | null;
    signUpWithGoogle : () => Promise<void>

}

// 2. Create the Context with its explicit type and initial value `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export default function Context({ children }: ThemeProviderProps) {
    const [currentMode, setCurrentMode] = useState<"light" | "dark">("light");
    const [activeBar, setActiveBar] = useState<boolean>(false);
    const [session, setSession] = useState<Session | null>(null);

    // Sign up function
    const signUpNewUsers = async (email: string, password: string,name: string): Promise<SignUpResult> => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (data.user) {
        await supabase
            .from('profiles')
            .insert({ id: data.user.id, full_name: name });
        }
        if (error) {
            console.error("Error signing up: ", error);
            return { success: false, error };
        }
        
        return { success: true, data };
    };

    // Sign in function
    const signInUser = async (email: string, password: string): Promise<SignInResult> => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password: password,
            });

            // Handle Supabase error explicitly
            if (error) {
                console.error("Sign-in error:", error.message);
                return { success: false, error: error.message };
            }

            // If no error, return success
            console.log("Sign-in success:", data);
            return { success: true, data };
        } catch (error) {
            // Handle unexpected issues
            console.error(error instanceof Error ? error.message : "An unexpected error occurred.");
            return {
                success: false,
                error: "An unexpected error occurred. Please try again.",
            };
        }
    };

    // Sign out function
    const signOut = async (): Promise<void> => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
        }
    };

    // Toggle theme function
    const toggleTheme = (): void => {
        const root = document.documentElement;
        if (currentMode === 'dark') {
            root.classList.remove('light');
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
    };

    // Effect for session management
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }: { data: { session: Session | null } }) => {
            setSession(session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
            setSession(session);
        });

        // Cleanup subscription on unmount
        return () => subscription.unsubscribe();
    }, []);

    // Effect for theme toggle
    useEffect(() => {
        toggleTheme();
    }, [currentMode]);

    const signUpWithGoogle = async (): Promise<void> => {
    await supabase.auth.signInWithOAuth({
    provider: "google",
    });
};

    return (
        <ThemeContext.Provider 
            value={{
                currentMode,
                setCurrentMode,
                toggleTheme,
                activeBar,
                setActiveBar,
                signUpNewUsers,
                signInUser,
                signOut,
                session,
                signUpWithGoogle
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext };
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};