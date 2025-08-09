import { coursesData } from "../assets/data";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const FeatureCourses = () => {
    const courses = useMemo(() => coursesData.filter(course => course.featured), []);

    return (
        <section className="mx-auto max-w-[1200px] py-[40px] px-[16px]">
            <div className="py-[12px] text-center">
                <p className="text-[36px] font-extrabold dark:text-p4">
                    Featured Courses
                </p>
                <p className="text-[16px] text-[#637387] dark:text-[#94ABC7]">
                    Explore our top-rated courses designed to enhance your skills.
                </p>
            </div>
            <div className="grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 gap-[24px] justify-center pt-6">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="w-full flex flex-col justify-between gap-4 bg-white dark:bg-[#1E293B] shadow-lg rounded-lg overflow-hidden relative transition-transform hover:scale-105"
                    >
                        <img    
                            loading="lazy"
                            src={course.image}
                            alt={course.title}
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4 flex flex-col gap-2 flex-grow">
                            <p className="dark:text-p4 text-p1 font-bold text-[20px]">
                                {course.title}
                            </p>
                            <p className="text-[#637387] dark:text-[#94ABC7] text-[14px]">
                                {course.description}
                            </p>
                        </div>
                            <Link
                                to={`courses/${String(course.id)}`}
                                className="self-center pb-4"
                            >
                                <button className="bg-p1 text-white rounded-full py-2 px-6 cursor-pointer hover:bg-p2 transition-all">
                                    Know More
                                </button>
                            </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureCourses;
