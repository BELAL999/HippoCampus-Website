import { Link , useLoaderData } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import {useState} from "react"
import { useTheme } from "../contexts/context";
import { useNavigate } from "react-router-dom";
import googelIcon  from "../assets/google-icon.svg";
import { FaCircleExclamation } from "react-icons/fa6";
import clsx from "clsx";
import loginPhoto from "../assets/login bg.jpg"
export function loader({request}:LoaderFunctionArgs){
    
    const message = new URL(request.url).searchParams.get("message")
    return message

}
const Login = () => {
    const message = useLoaderData()
    const navigate = useNavigate();
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string> ("")
    const [error,setError] = useState<string| null>(null)
    const [loading , setLoading] = useState<boolean>(false)
    const {signInUser,signUpWithGoogle} = useTheme()
    const handleLoginIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const result = await signInUser(email, password);
            
            if (result.success) {
                navigate("/courses");
                setError(""); // Clear errors on success
            } else {
                setError(result.error);
                // Auto-clear error after 3 seconds
                setTimeout(() => setError(""), 5000);
            }
        } catch (err:unknown) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred.");
            setTimeout(() => setError(""), 3000);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen pt-28">
            <div className="flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full relative">
                            {message && <h2 className="text-red-700 font-bold py-4 text-2xl">{message}</h2>}

            <h1 className="text-4xl font-bold text-p2 dark:text-p4 mb-2">
                Welcome back!
            </h1>
            <p className="text-p3 dark:text-[#94ABC7] mb-8">
                Enter your credentials to access your account.
            </p>
            {/* 1px solid var(#7c7c7c, #818181) */}
            <button className="w-full bg-transparent px-3 py-3 text-sm font-semibold leading-6 text-p2 shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer mt-4 flex justify-center items-center gap-8 dark:text-p1 border-1 border-[#818181] rounded-full 
                " onClick={signUpWithGoogle}>
                    <img src={googelIcon} alt="" className="w-6 h-6" />
                        Continue with Google
            </button>
            <div className="absolute w-full h-[1px] dark:bg-[] bg-p1 my-4">

            </div>
            <form className="flex flex-col gap-4 pt-8 pb-2" onSubmit={handleLoginIn}>
                <div>
                <label
                    htmlFor="email-input"
                    className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-1"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email-input"
                    required
                    className={clsx("w-full px-4 py-2 border border-[#DBE0E5] dark:border-dark-Cs rounded-lg bg-p4 dark:bg-[#21262B] focus:outline-none focus:ring-2 focus:ring-p1 dark:focus:ring-s2 dark:text-p4",error && "border-red-500")}
                    placeholder="email@example.com"
                    onChange={(e)=> {
                        setEmail(e.currentTarget.value)
                    }}
                />
                </div>
                <div>
                <label
                    htmlFor="pass-input"
                    className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-1"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="pass-input"
                    className={clsx("w-full px-4 py-2 border border-[#DBE0E5] dark:border-dark-Cs rounded-lg bg-p4 dark:bg-[#21262B] focus:outline-none focus:ring-2 focus:ring-p1 dark:focus:ring-s2 dark:text-p4",error && "border-red-500")}
                    placeholder="Enter your password"
                    onChange={(e)=> {
                        setPassword(e.currentTarget.value)
                    }}
                />
                </div>
                <button
                type="submit"
                disabled={loading}
                className="bg-p1 text-p2 rounded-full py-3 px-4 cursor-pointer font-semibold hover:opacity-90 transition-opacity w-full mt-4">
                    {loading ? "Submitting....." : "Sign In"}
                </button>
            </form>
            {error && <div className="flex gap-4 items-center pl-4">
                    <FaCircleExclamation  className="text-red-500"/>
                    <p className="text-red-500">{error}</p>
                </div>}
            <div className="text-center mt-6 text-sm">
                <p className="text-p3 dark:text-[#94ABC7]">
                Not a member?{" "}
                <Link to="/signup" className="font-semibold text-p2 dark:text-p1 hover:underline">
                    Register now
                </Link>
                </p>
            </div>
            </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
            {/* Your illustration or image component goes here */}
                <div className="w-full  rounded-lg flex items-center justify-center">
                    <img src={loginPhoto} alt="loginPhoto"  className="rounded-2xl"/>
                </div>
            </div>
        </section>
    );
};

export default Login;