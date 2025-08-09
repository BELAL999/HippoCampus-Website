import { useTheme } from "../contexts/context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googelIcon from "../assets/google-icon.svg"
import clsx from "clsx";
import { FaCircleExclamation } from "react-icons/fa6";
import {Link } from "react-router-dom"
import registerPhoto from "../assets/register photo.jpg"




const SignUp = () => {
  const navigate = useNavigate();
  const  {signUpNewUsers,signUpWithGoogle} = useTheme()
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [name,setName] = useState<string>("")
  const [loading,setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);

  console.log(name)


  const handleSummit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUsers(email, password,name); // Call context function
      if (result.success) {
        navigate("/courses"); // Navigate to dashboard on success
      } else {
        setError(result.error.message); // Show error message on failure
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
    }
  }
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen pt-28">
      {/* Column 1: The Form */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2 dark:text-p4">Create Your Account</h1>
        <p className="text-p3 dark:text-[#94ABC7] mb-6">
          Enter your information to get started with Hippocampus.
        </p>

          <button className="w-full bg-transparent px-3 py-3 text-sm font-semibold leading-6 text-p2 shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer mt-4 flex justify-center items-center gap-8 dark:text-p1 border-1 border-[#818181] rounded-full 
                " onClick={signUpWithGoogle}>
                    <img src={googelIcon} alt="" className="w-6 h-6" />
                        Continue with Google
        </button>

        <form className="flex flex-col gap-5 pt-8 pb-4" onSubmit={handleSummit}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="name-input"
              className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2"
            >
              Your Name
            </label>
            <input
              id="name-input"
              type="text"
              name="name"
              required
              placeholder="e.g., Jane Doe"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              onChange={(e)=> {
                setName(e.currentTarget.value)
              }}  
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email-input"
              className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2"
            >
              Email Address
            </label>
            <input
              id="email-input"
              type="email"
              name="email"
              placeholder="you@example.com"
              className={clsx("block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",error ? "border-red-500" : "")}
              onChange={(e)=> {
                setEmail(e.currentTarget.value)
              }}  
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="pass-input"
              className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2"
            >
              Password
            </label>
            <input
              id="pass-input"
              type="password"
              name="password"
              placeholder="••••••••"
              className={clsx("block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",error ? "border-red-500" : "")}
              onChange={(e)=> {
                setPassword(e.currentTarget.value)
              }}  
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full justify-center rounded-md bg-p1 px-3 py-3 text-sm font-semibold leading-6 text-p2 shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          >
            {loading ? "registering..." : "Sign Up"}
          </button>
        </form>
        {error && <div className="flex gap-4 items-center pl-4">
                            <FaCircleExclamation  className="text-red-500"/>
                            <p className="text-red-500">{error}</p>
        </div>}
        <div className="text-center mt-6 text-sm">
                  <p className="text-p3 dark:text-[#94ABC7]">
                  Already a member?{" "}
                  <Link to="/login" className="font-semibold text-p2 dark:text-p1 hover:underline">
                      login now
                  </Link>
                  </p>
          </div>
      </div>

      {/* Column 2: The Illustration/Image */}
      <div className="hidden md:flex items-center justify-center">
        {/* Your illustration or image component goes here */}
        <div className="w-full  bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <img src={registerPhoto} alt="register photo"  className="rounded-2xl"/>
        </div>
      </div>
    </section>
  );
};

export default SignUp; // Added export for usability