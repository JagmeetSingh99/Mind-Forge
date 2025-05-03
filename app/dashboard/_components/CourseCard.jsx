import { db } from "@/configs/db"
import { CourseList } from "@/configs/schema"
import { eq } from "drizzle-orm"
import Image from "next/image"
import Link from "next/link"
import { HiEllipsisVertical, HiOutlineBookOpen, HiAcademicCap, HiBeaker } from "react-icons/hi2"
import DropdownOption from "./DropdownOption"

function CourseCard({ course, refreshData, displayUser = false }) {

    const handleOnDelete = async () => {
        const resp = await db.delete(CourseList)
            .where(eq(CourseList?.id, course?.id))
            .returning({ id: CourseList?.id })

        if (resp) {
            refreshData();
        }
    }

    // Get background pattern based on level
    const getBgPattern = () => {
        switch (course?.level?.toLowerCase()) {
            case 'beginner': return 'bg-emerald-100';
            case 'intermediate': return 'bg-amber-100';
            case 'advanced': return 'bg-fuchsia-100';
            default: return 'bg-blue-100';
        }
    };

    // Get accent colors based on level
    const getAccentColor = () => {
        switch (course?.level?.toLowerCase()) {
            case 'beginner': return 'bg-emerald-500';
            case 'intermediate': return 'bg-amber-500';
            case 'advanced': return 'bg-fuchsia-500';
            default: return 'bg-blue-500';
        }
    };

    const bgPattern = getBgPattern();
    const accentColor = getAccentColor();
    // Transform the level text for vertical display
    const getVerticalLevelText = () => {
        const level = course?.level || 'Level';
        return level.toUpperCase();
    };

    return (
        <div className={`relative overflow-hidden mt-6 ${bgPattern} rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-8 left-4 w-12 h-12 rounded-full bg-white"></div>
                <div className="absolute bottom-12 right-8 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute top-24 right-12 w-8 h-8 rounded-full bg-white"></div>
            </div>

            {/* Main card content with transparent background */}
            <div className="relative z-10">
                {/* Side info panel with light background and vertical level text */}
                <div className={`absolute right-0 top-0 bottom-0 w-16 ${bgPattern} bg-opacity-80 flex flex-col items-center justify-between py-4 rounded-l-xl border-l border-white/50`}>
                    {!displayUser ? (
                        <DropdownOption handleOnDelete={() => handleOnDelete()}>
                            <div className="p-2 hover:bg-white/30 rounded-full transition-all">
                                <HiEllipsisVertical className="text-gray-700" />
                            </div>
                        </DropdownOption>
                    ) : (
                        <div className="p-2">
                            <HiAcademicCap className="text-gray-700" size={20} />
                        </div>
                    )}

                    <div className="flex flex-col items-center gap-1">
                        <HiOutlineBookOpen className="text-gray-700" size={20} />
                        <span className="text-xs font-bold text-gray-700">
                            {course?.courseOutput?.course?.noOfChapters}
                        </span>
                    </div>

                    {/* Vertical level indicator with larger text */}
                    <div className="h-28 w-4 rounded-full bg-white flex items-center justify-center">
                        <div className="text-sm font-bold text-gray-900 transform -rotate-90 whitespace-nowrap">
                            {course?.level}
                        </div>
                    </div>
                </div>

                {/* Course Banner with dark gradient overlay */}
                <Link href={'/course/' + course?.courseId}>
                    <div className="relative h-48 ml-4 mr-24 mt-4 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                        <Image
                            src={course?.courseBanner}
                            width={400}
                            height={250}
                            alt="Banner"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Category badge */}
                        <div className={`absolute top-3 left-3 ${accentColor} text-white px-3 py-1 rounded-full text-xs z-20 backdrop-blur-sm`}>
                            {course?.category}
                        </div>
                    </div>
                </Link>

                {/* Course info section */}
                <div className="p-6 pt-4 mr-24">
                    <h2 className="font-bold text-gray-800 text-xl mb-3 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                        {course?.courseOutput?.course?.courseName || course?.courseOutput?.course?.name || course?.courseOutput?.course?.category}
                    </h2>

                    {/* User information */}
                    {displayUser && (
                        <div className="flex gap-3 items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg my-3">
                            <Image
                                src={course?.userProfileImage}
                                width={40}
                                height={40}
                                alt="User"
                                className="rounded-full border-2 border-white shadow-md"
                            />
                            <div>
                                <h2 className="text-sm font-semibold">{course?.userName}</h2>
                                <p className="text-xs text-gray-600">Course Creator</p>
                            </div>
                        </div>
                    )}

                    {/* Bottom info bar */}
                    <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-1.5">
                            <HiBeaker className="text-indigo-600" />
                            <span className="text-xs font-medium text-gray-700">AI Powered</span>
                        </div>

                        <Link href={'/course/' + course?.courseId}>
                            <div className="group/btn text-xs font-bold text-indigo-600 hover:underline">
                                EXPLORE
                                <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CourseCard