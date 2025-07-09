
import { FeatureCoursesData } from "../assets/data"
import {Link} from "react-router-dom"
const FeatureCourses = () => {
return (
    <section className="mx-auto min-lg:w-[960px] py-[40px]">
        <div className="py-[12px]">
            <p className="text-[30px]/[45px] font-black dark:text-p4">
                        Featured Courses
            </p>
        </div>
        <div className="flex flex-wrap gap-[16px]">
            {FeatureCoursesData.map((coures,index) =>(
                <div key={index}  className="min-md:w-[calc(33%-16px)] min-sm:W-[calc(50%-16px)] w-full flex flex-col gap-2 relative">
                        <img src={coures.image} alt={coures.image} className="hover:scale-105 duration-500 transition-all"/>
                        <p className="dark:text-p4 text-p2 font-bold">{coures.title}</p>
                        <p className="text-[#637387] dark:text-[#94ABC7] slef-end">
                            {coures.text}
                        </p>
                        <Link to={coures.title} className="self-center min-md:absolute min-md:-bottom-14">
                            <button className="bg-p1 text-p2 rounded-full py-2 px-4 cursor-pointer mx-auto ">Know more</button>
                        </Link>
                </div>

            ))}
        </div>
    </section>
)
}

export default FeatureCourses
