import { useState } from "react";
import { useTheme } from "../contexts/context";
import {Link} from "react-router-dom"
const UserProfile = ({setIsHover,session,isHover}) => {
    const {signOut} = useTheme()
    const [leaveTimeout, setLeaveTimeout] = useState(null);

    const handleMouseEnter = () => {
        if (leaveTimeout) {
        clearTimeout(leaveTimeout);
        setLeaveTimeout(null);
        }
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
        setIsHover(false);
        }, 100); // 100ms delay
        setLeaveTimeout(timeout);
    };
return (

    <div className="relative"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
    >
        <div 
        className="w-10 h-10 bg-p1 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md hover:bg-blue-600 transition-colors cursor-pointer" 
        >
        {session?.user?.user_metadata?.full_name?.charAt(0).toUpperCase() || '?'}
        </div>
        {isHover && (
        <div 
            className="absolute top-full -left-[200%] mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-lg whitespace-nowrap z-10">
            <div className="font-medium">{session?.user?.user_metadata?.full_name}</div>
            <div className="text-sm text-gray-500 pt-4 hover:text-blue-500">
                <Link to ={`/profile/${session?.user?.id}`}>
                    View Profile
                </Link>
                </div>
            <div>
                <button className="mt-4 bg-p1 rounded-2xl py-2 px-4 cursor-pointer" onClick={signOut}>Sign out</button>
            </div>
        </div>
        )}
    </div>
    )
}

export default UserProfile
