"use client"
import AddCourse from './_components/AddCourse'
import UserCourseList from './_components/UserCourseList'

function Dashboard() {
    return (
        <div className="space-y-8">
            <div className="relative">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-amber-200 to-rose-300 rounded-full blur-3xl opacity-30"></div>

                {/* Content with light glassmorphism */}
                <div className="rounded-2xl backdrop-blur-sm bg-white/80 border border-white shadow-lg relative z-10">
                    <AddCourse />
                </div>
            </div>

            <div className="relative">
                <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-24 h-24 bg-gradient-to-r from-emerald-200 to-blue-300 rounded-full blur-3xl opacity-30"></div>

                <div className="rounded-2xl backdrop-blur-sm bg-white/80 border border-white shadow-lg relative z-10">
                    <UserCourseList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard