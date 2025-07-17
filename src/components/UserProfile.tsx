import React, { useState } from "react";
import { useTheme } from "../contexts/context";
import { Link } from "react-router-dom";
import type { Session } from "@supabase/supabase-js"; // Import the official Session type

// Remove your custom interfaces and use this simplified interface
interface UserProfileProps {
  setIsHover: (isHover: boolean) => void;
  session: Session | null; // Use the official Session type
  isHover: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ setIsHover, session, isHover }) => {
  const { signOut } = useTheme();
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (): void => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setIsHover(true);
  };

  const handleMouseLeave = (): void => {
    const timeout = setTimeout(() => {
      setIsHover(false);
    }, 100);
    setLeaveTimeout(timeout);
  };

  return (
    <div 
      className="relative"
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
          className="absolute top-full -left-[200%] mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-lg whitespace-nowrap z-10"
        >
          <div className="font-medium">{session?.user?.user_metadata?.full_name}</div>
          <div className="text-sm text-gray-500 pt-4 hover:text-blue-500">
            <Link to={`/profile/${session?.user?.id}`}>
              View Profile
            </Link>
          </div>
          <div>
            <button 
              className="mt-4 bg-p1 rounded-2xl py-2 px-4 cursor-pointer" 
              onClick={signOut}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;