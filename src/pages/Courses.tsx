import { coursesData } from "../assets/data"
import {Link} from "react-router-dom"
const Courses = () => {

  return (
    <section className="container pt-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black dark:text-p4 mb-4">Our Courses</h1>
        <p className="text-lg text-p3 dark:text-[#94ABC7]">
          Explore our range of specialized medical courses.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <div  className="bg-p4 dark:bg-[#21262B] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 dark:border-dark-Cs flex flex-col">
              <img src={course.image} alt={course.title} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-2">
                  {course.keyWords.map((keyword) => (
                    <span key={keyword} className="bg-s1 dark:bg-s2 text-p3 dark:text-[#94ABC7] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-p2 dark:text-p4 mb-2">{course.title}</h3>
                <p className="text-p3 dark:text-[#94ABC7] text-sm mb-4 flex-grow">{course.description}</p>
                <div className="text-sm text-p3 dark:text-[#94ABC7] mb-4">
                  <p><span className="font-bold">Duration:</span> {course.duration}</p>
                  <p><span className="font-bold">Instructor:</span> {course.instructor}</p>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <p className="text-lg font-bold text-p2 dark:text-p4">${course.price}</p>
                  <button className="bg-p1 text-p2 rounded-full py-2 px-4 cursor-pointer font-semibold hover:opacity-80 transition-opacity">Enroll Now</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Courses
