import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://nczwedilfxnffrrazpth.supabase.co";
const supabaseKey: string | undefined = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Anon Key must be provided in your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);