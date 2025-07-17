import { Routes, Route, BrowserRouter} from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import CourseDetails from "./pages/CourseDetails"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="courses" element={<Courses/>} />
          <Route path="courses/:id" element={<CourseDetails/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="login" element ={<Login />} />
          <Route path="signup" element ={<SignUp />} />
          <Route path="profile/:id" element ={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
