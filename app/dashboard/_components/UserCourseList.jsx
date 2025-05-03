"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useContext, useEffect, useState } from 'react'
import CourseCard from './CourseCard'

function UserCourseList() {
    const { user } = useUser();
    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

    useEffect(() => {
        user && getUserCourses();
    }, [user]);

    const getUserCourses = async () => {
        setLoading(true);
        const result = await db.select().from(CourseList)
            .where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress))
        setCourseList(result);
        setUserCourseList(result);
        setLoading(false);
    }

    const NoCourseAvailable = () => (
        <div className="relative overflow-hidden mt-10 bg-indigo-50 rounded-xl border border-gray-100 p-8 max-w-xl mx-auto">
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-8 left-4 w-12 h-12 rounded-full bg-white"></div>
                <div className="absolute bottom-12 right-8 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute top-24 right-12 w-8 h-8 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-indigo-600 mb-2 relative">
                    NO COURSE AVAILABLE
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-600 rounded-full"></div>
                </h3>

                <p className="text-gray-600 text-center mt-4 mb-6">
                    You haven't created any AI courses yet. Get started by creating your first course!
                </p>

                <svg viewBox="0 0 200 100" className="w-full max-w-xs mx-auto">
                    <line x1="40" y1="50" x2="160" y2="50" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 4">
                        <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="24"
                            dur="2s"
                            repeatCount="indefinite" />
                    </line>

                    <circle cx="100" cy="50" r="6" fill="#6366f1">
                        <animate
                            attributeName="r"
                            values="4;6;4"
                            dur="2s"
                            repeatCount="indefinite" />
                        <animate
                            attributeName="opacity"
                            values="1;0.5;1"
                            dur="2s"
                            repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
        </div>
    )

    return (
        <div className="m-8 px-1 sm:px-2 ">
            <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-indigo-600 rounded-full mr-3"></div>
                <h2 className="font-bold text-xl text-gray-800">My AI Courses</h2>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="w-full h-[270px] bg-gray-100 rounded-xl overflow-hidden relative">
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gray-200 animate-pulse"></div>
                            <div className="absolute top-36 left-4 w-3/4 h-5 bg-gray-200 animate-pulse rounded"></div>
                            <div className="absolute top-44 left-4 w-1/2 h-4 bg-gray-200 animate-pulse rounded"></div>
                            <div className="absolute bottom-4 left-4 right-20 h-8 bg-gray-200 animate-pulse rounded"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-14 bg-gray-200 animate-pulse"></div>
                        </div>
                    ))}
                </div>
            ) : courseList?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {courseList?.map((course, index) => (
                        <CourseCard course={course} key={index} refreshData={() => getUserCourses()} />
                    ))}
                </div>
            ) : (
                <NoCourseAvailable />
            )}
        </div>
    )
}

export default UserCourseList