import { useParams } from 'react-router-dom';
import { coursesData, courses } from '../assets/data';
import { FaBook, FaClock, FaUserTie, FaCertificate, FaLanguage } from 'react-icons/fa';
import useWhatsApp from '../Hooks/useWhatsApp.ts';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = id ? parseInt(id, 10) : -1;
  
  const course = coursesData.find(c => c.id === courseId);

  const number = "201011822243";
  const {openWhatsApp} = useWhatsApp(number);

  const goToWhatsApp = (courseTitle: string) => {
    const message = `Hello, I want to enroll in the ${courseTitle} course. Could you please provide more details?`;
    openWhatsApp(message);
  }
  
  // This is a bit fragile due to slight title mismatches. 
  // A shared ID between course objects would be more robust.
  const detailedCourse = course ? courses.find(c => c.title.includes(course.title.replace(' Block', ''))) : undefined;

  if (!course) {
    return (
      <div className="container pt-28 text-center min-h-screen">
        <h1 className="text-4xl font-black dark:text-p4">Course Not Found</h1>
        <p className="text-lg text-p3 dark:text-[#94ABC7] mt-4">
          We couldn't find the course you're looking for.
        </p>
      </div>
    );
  }

  return (
    <section className="pt-28">
      {/* Hero Section */}
      <div className="bg-s1 dark:bg-[#1e1e1e]">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl lg:text-5xl font-black text-p2 dark:text-p4 mb-4">{course.title}</h1>
              {detailedCourse && <p className="text-xl text-p3 dark:text-[#94ABC7] mb-6">{detailedCourse.tagline}</p>}
              <div className="flex flex-wrap gap-4 text-p3 dark:text-[#94ABC7]">
                <div className="flex items-center gap-2">
                  <FaUserTie />
                  <span>Instructor: {course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>Duration: {course.duration}</span>
                </div>
              </div>
            </div>
            <div className="bg-p4 dark:bg-[#21262B] p-6 rounded-2xl shadow-lg border-2 border-[#DBE0E5] dark:border-dark-Cs">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-3xl font-bold text-p2 dark:text-p4 mb-4">${course.price}</p>
              <button className="w-full bg-p1 text-p2 rounded-full py-3 px-4 cursor-pointer font-semibold hover:opacity-80 transition-opacity" 
                onClick={()=> goToWhatsApp(course.title)}>
                Enroll Now
              </button>
              {detailedCourse && (
                <div className="text-sm text-p3 dark:text-[#94ABC7] mt-4 space-y-2">
                  <div className="flex items-center gap-2"><FaBook /><span>Level: {detailedCourse.details.level}</span></div>
                  <div className="flex items-center gap-2"><FaCertificate /><span>Certificate: {detailedCourse.details.certificate}</span></div>
                  <div className="flex items-center gap-2"><FaLanguage /><span>Language: {detailedCourse.details.language}</span></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div>
            {detailedCourse && (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold dark:text-p4 mb-4">Course Overview</h2>
                  <p className="text-p3 dark:text-[#94ABC7] leading-relaxed">{detailedCourse.overview}</p>
                </div>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold dark:text-p4 mb-4">What you'll learn</h2>
                  <ul className="list-disc list-inside space-y-2 text-p3 dark:text-[#94ABC7]">
                    {detailedCourse.learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            <div className="mb-12">
              <h2 className="text-2xl font-bold dark:text-p4 mb-4">Course Description</h2>
              <p className="text-p3 dark:text-[#94ABC7] leading-relaxed">{course.description}</p>
            </div>

            {detailedCourse && (
              <div className="bg-p4 dark:bg-[#21262B] p-8 rounded-2xl shadow-lg border-2 border-[#DBE0E5] dark:border-dark-Cs">
                <h2 className="text-2xl font-bold dark:text-p4 mb-4">Course Content</h2>
                <ul className="space-y-3">
                  {detailedCourse.topics.map((topic, index) => (
                    <li key={index} className="flex justify-between items-center text-p3 dark:text-[#94ABC7] border-b dark:border-dark-Cs pb-2 pt-2">
                      <span>{topic.name}</span>
                      {topic.hours && <span className="text-xs font-semibold bg-s1 dark:bg-s2 px-2 py-1 rounded-full">{topic.hours} hrs</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails
