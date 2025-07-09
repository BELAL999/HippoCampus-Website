import{Link} from "react-router-dom"
const BrowseCourses = () => {
    return (
        <div className="my-[120px] mx-auto text-center ">
            <p className="text-[32px] font-black dark:text-p4">Ready to Take the Next Step?</p>
            <p className="pb-[32px] dark:text-p4 opacity-80 text-[16px] font-bold">Explore our course catalog and find the perfect program to advance your medical career.</p>
            <Link to="courses">
                <button className="bg-p1 text-p2 rounded-full py-2 px-4 cursor-pointer mx-auto font-bold">Browse Courses</button>
            </Link>
        </div>
    )
}

export default BrowseCourses
