import {createContext , useState, useEffect,useContext} from "react"
import type { ReactNode } from "react"; // <--- Add 'type' here

// const ThemeContext = createContext()
// 1. Define the shape of your context's value (Crucial for TypeScript)

export interface ThemeContextType {
    currentMode: "light" | "dark";
    setCurrentMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>; // Type for useState setter
    toggleTheme: () => void;
    activeBar : boolean;
    setActiveBar : React.Dispatch<React.SetStateAction<boolean>>;
}

// 2. Create the Context with its explicit type and initial value `undefined`
//    Initializing with `undefined` ensures consumers must be inside a provider.

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeProviderProps {
  children: ReactNode; // Type for children
}


export default function Context({children}:ThemeProviderProps){

    const [currentMode, setCurrentMode] = useState<"light"|"dark">("light");
    const [activeBar,setActiveBar] = useState<boolean>(false)

    function toggleTheme():void {
        const root = document.documentElement;
        if (currentMode === 'dark') {
            root.classList.remove('light');
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
    }
    useEffect(() => {
        toggleTheme()
    }, [currentMode]);

    
    return (
        <ThemeContext.Provider value={{currentMode,setCurrentMode,toggleTheme,activeBar,setActiveBar}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext} 

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        // This error ensures the hook is only used inside a ThemeProvider
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};