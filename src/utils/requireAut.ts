import {supabase} from "../supabaseClient"
import { redirect } from "react-router-dom";
export  async function checkUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (!data.session) {
        throw redirect("/login?message=You must log in first.")
    } 
    else if (error) {
        console.error('Error getting session:', error.message);
        return null;
    }
}
