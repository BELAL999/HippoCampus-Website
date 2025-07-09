import { NavLink,Link } from 'react-router-dom';
import {useTheme} from '../contexts/context';
import { HiMiniBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import clsx from 'clsx';
import { pages } from "../assets/data"
import {useState} from "react"
import UserProfile from './UserProfile';




const Header = () => {
    const {currentMode,setCurrentMode,activeBar,setActiveBar,session} = useTheme()
    const [isHover,setIsHover] = useState<boolean>(false)
return (
    <header className="h-[65px] bg-p4 dark:bg-[#1e1e1e]  flex justify-between items-center py-[12px] px-[40px]
        border-b-1 border-p1 dark:border-p4 fixed min-md:top-0 left-0 z-50 w-full transition-all duration-500 max-sm:px-[10px]">
        <div className='min-sm:hidden cursor-pointer z-10' onClick={()=>{setActiveBar(prev => !prev)
            console.log("changed")
        }}>
            {activeBar ? <IoMdClose  className='dark:text-p1'/>  : <HiMiniBars2 className='dark:text-p1' />} 
        </div>
        <div className='min-lg:w-[273px] max-md:hidden'>
            <NavLink to="/" end className="text-[18px] font-bold text-p2 dark:text-p4">Hippocampus</NavLink>
        </div>
        <div className='flex-1 items-center flex min-lg:justify-between max-md:justify-center max-lg:justify-end max-w-[1280px] min-md:ml-[15px]'>
            <nav className={clsx(`flex min-lg:gap-[36px] min-md:gap-[8px] min-lg:flex-1 min-lg:mr-[32px] min-md:mr-[8px] min-md:justify-end max-sm:w-1/2 max-sm:pt-[80px]
                max-sm:absolute max-sm:left-0 max-sm:flex-col max-sm:h-screen max-sm:gap-[32px] max-sm:justify-start max-sm:top-0  duration-500 transition-all max-sm:bg-[#FAFAFA] dark:bg-[#1e1e1e]`,activeBar ? "translate-x-[0]" : "max-sm:translate-x-[-100%]" )}>
                {pages.map((page,index)=>(
                    <NavLink to={page.path} end key={index} onClick={()=>{setActiveBar(prev => !prev)}}
                    className={({isActive})=> {
                    const basicClass = clsx("font-bold text-[14px]  px-4 py-2 rounded-md transition-colors duration-200 max-sm:w-11-12", page.name==="Home" ? "min-md:hidden" : "")
                    if(isActive) {return `${basicClass} bg-[#f0f2f4] font-semibold`}
                    return `${basicClass} dark:text-p4`
                }}>
                        {page.name}
                    </NavLink>
                ))}
            </nav>
            <div className='flex gap-[8px]'>
                <button className='rounded-full bg-s1 h-[40px] w-[40px] flex justify-center items-center cursor-pointer'
                    onClick={()=>{
                        setCurrentMode((prev) => {
                            if (prev === "light"){
                                return "dark"
                            }else {
                                return "light"
                            }
                        })
                        console.log(currentMode)
                    }}>
                    {currentMode === "dark" ? <MdOutlineDarkMode /> : <CiLight />}
                </button>
                {/* here we will do a furthur development */}
            {!session ? (
                <button className='px-[16px] rounded-[20px] bg-p1 h-[40px] text-p2 font-bold text-[14px] cursor-pointer'
                        onClick={()=>{}}>
                    <Link to="/login">sign in</Link>
                </button>
                ) : <UserProfile session={session} setIsHover={setIsHover}  isHover = {isHover} />}
            </div>
        </div>

    </header>
)
}

export default Header
