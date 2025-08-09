import { Route, createBrowserRouter ,createRoutesFromElements ,RouterProvider} from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Login , {loader as loginLoader} from "./pages/Login"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import CourseDetails from "./pages/CourseDetails"
import MyCourses from "./pages/MyCourses"
import {checkUserSession} from "./utils/requireAut"



const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="courses" element={<Courses/>} />
        <Route path="courses/:id" element={<CourseDetails/>} />
        <Route path="my-courses" element={<MyCourses/>}  loader = {
          async () => await checkUserSession()
        } />
        <Route path ="my-courses/:id" element={<h1>Course Content</h1>}   loader = {
          async () => await checkUserSession()
        }/>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element ={<Login />} loader = {loginLoader} />
        <Route path="signup" element ={<SignUp />} />
        <Route path="profile/:id" element ={<Profile />}  loader = {
          async () => await checkUserSession()
        }/>
      </Route>
))


export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
