import { Routes, Route, BrowserRouter } from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Instructors from "./pages/Instructors"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="courses" element={<Courses/>} />
          <Route path="instructors" element={<Instructors/>} />
          <Route path="faq" element={<Faq/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
