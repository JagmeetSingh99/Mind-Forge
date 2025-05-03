"use client"
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

function AddCourse() {
    const { user } = useUser();
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

    // Check if userCourseList is an array and get its length
    const courseCount = Array.isArray(userCourseList) ? userCourseList.length : 0;

    return (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-blue-900">
                        Hello, <span className="text-indigo-700">{user?.fullName}</span>
                    </h3>
                    <p className="text-blue-700 font-medium">
                        Create new course with AI, Share with friends and Earn from it
                    </p>
                </div>

                <Link href={courseCount >= 5 ? '/dashboard/upgrade' : '/create-course'}>
                    <Button
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md"
                    >
                        <Sparkles size={18} className="text-yellow-200" />
                        + Create AI Course
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default AddCourse