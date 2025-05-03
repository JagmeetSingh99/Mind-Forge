"use client"
import { useState } from 'react';
import { UserCourseListContext } from '../_context/UserCourseListContext';
import Header from './_components/Header';
import SideBar from './_components/SideBar';

function DashboardLayout({ children }) {
    const [userCourseList, setUserCourseList] = useState([]);
    return (
        <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }} >
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className='md:w-64 hidden md:block fixed top-0 left-0 h-full z-10 border-r border-purple-500/20 bg-slate-900/80 backdrop-blur-sm'>
                    <SideBar />
                </div>
                <div className='md:ml-64'>
                    <Header />
                    <div className='p-10 bg-gradient-to-b from-slate-900/50 to-purple-900/30 backdrop-blur-md'>
                        <div className="relative">
                            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] pointer-events-none"></div>
                            <div className="relative z-10">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </UserCourseListContext.Provider>
    )
}

export default DashboardLayout