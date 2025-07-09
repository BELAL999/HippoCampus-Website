import { Link } from "react-router-dom";
import {useState} from "react"
import { useTheme } from "../contexts/context";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string> ("")
    const [error,setError] = useState<string| null>(null)
    const [loading , setLoading] = useState<boolean>(false)
    const {signInUser,signUpWithGoogle} = useTheme()
    console.log(error,loading)
    const handleLoginIn = async (e: any) => {
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
                setTimeout(() => setError(""), 3000);
            }
        } catch (err) {
            setError("An unexpected error occurred.");
            setTimeout(() => setError(""), 3000);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen pt-28">
            <div className="flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
            <h1 className="text-4xl font-bold text-p2 dark:text-p4 mb-2">
                Welcome back!
            </h1>
            <p className="text-p3 dark:text-[#94ABC7] mb-8">
                Enter your credentials to access your account.
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleLoginIn}>
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
                    className="w-full px-4 py-2 border border-[#DBE0E5] dark:border-dark-Cs rounded-lg bg-p4 dark:bg-[#21262B] focus:outline-none focus:ring-2 focus:ring-p1 dark:focus:ring-s2 dark:text-p4"
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
                    className="w-full px-4 py-2 border border-[#DBE0E5] dark:border-dark-Cs rounded-lg bg-p4 dark:bg-[#21262B] focus:outline-none focus:ring-2 focus:ring-p1 dark:focus:ring-s2 dark:text-p4"
                    placeholder="Enter your password"
                    onChange={(e)=> {
                        setPassword(e.currentTarget.value)
                    }}
                />
                </div>
                <button
                type="submit"
                className="bg-p1 text-p2 rounded-full py-3 px-4 cursor-pointer font-semibold hover:opacity-90 transition-opacity w-full mt-4"
                >
                Sign In
                </button>
            </form>
            <div className="text-center mt-6 text-sm">
                <p className="text-p3 dark:text-[#94ABC7]">
                Not a member?{" "}
                <Link to="/signup" className="font-semibold text-p2 dark:text-p1 hover:underline">
                    Register now
                </Link>
                </p>
            </div>
            <div className="flex flex-col justify-between gap-4 pt-4">
                      <p className="mx-auto font-bold dark:text-p1"> Or </p>
                      <button className="w-full  rounded-md bg-p1 px-3 py-3 text-sm font-semibold leading-6 text-p2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer mt-4 flex justify-center items-center gap-8
                      " onClick={signUpWithGoogle}>
                        <FaGoogle  className="text-[#EA4335]"/> 
                        sign in with Google 
                      </button>
                    </div>
            </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
            {/* Your illustration or image component goes here */}
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Illustration Area</p>
                </div>
            </div>
        </section>
    );
};

export default Login;