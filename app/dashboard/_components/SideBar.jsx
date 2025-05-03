"use client"
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Progress } from "@/components/ui/progress";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { HiCircleStack, HiHome, HiMiniPower, HiMiniShieldCheck } from "react-icons/hi2";

function SideBar() {
    const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);
    const { signOut } = useClerk();
    const router = useRouter();
    const path = usePathname();

    // Menu items without logout
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiCircleStack />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <HiMiniShieldCheck />,
            path: '/dashboard/upgrade'
        }
    ];

    const handleLogout = async () => {
        await signOut();
        router.push("/");
    };

    return (
        <div className="fixed h-full md:w-72 backdrop-blur-md bg-gradient-to-b from-slate-800 via-indigo-900 to-purple-900 shadow-lg border-r border-indigo-800/30 flex flex-col relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full blur-3xl opacity-20"></div>

            {/* Logo Section with Accent */}
            <div className="relative h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-br-3xl flex items-center px-6 shadow-md">
                <div className="absolute -bottom-3 right-6 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                </div>
                <Image src={"/logo.svg"} width={150} height={80} alt="Logo" className="filter brightness-200 relative z-10" />
            </div>

            {/* Menu Section */}
            <div className="px-5 pt-6 flex-1 relative z-10">
                <h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4 px-3">Navigation</h3>
                <ul className="space-y-2">
                    {Menu.map((item) => (
                        <Link href={item.path} key={item.id}>
                            <div className={`flex items-center gap-3 p-3 cursor-pointer rounded-xl transition-all duration-300 group
                                ${item.path === path
                                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'hover:bg-white/10 text-gray-200 hover:translate-x-1'}`}>
                                <div className={`text-2xl ${item.path === path ? 'text-white' : 'text-indigo-300 group-hover:text-indigo-200'}`}>
                                    {item.icon}
                                </div>
                                <h2 className="font-medium">{item.name}</h2>
                                {item.path === path && (
                                    <div className="ml-auto w-2 h-8 bg-white rounded-full opacity-70"></div>
                                )}
                            </div>
                        </Link>
                    ))}

                    {/* Logout Button */}
                    <div
                        onClick={handleLogout}
                        className="flex items-center gap-3 p-3 cursor-pointer rounded-xl transition-all duration-300 mt-6 hover:bg-white/10 text-gray-200 hover:translate-x-1 group"
                    >
                        <div className="text-2xl text-red-400 group-hover:text-red-300">
                            <HiMiniPower />
                        </div>
                        <h2 className="font-medium">Logout</h2>
                    </div>
                </ul>
            </div>

            {/* Progress Section */}
            <div className="mx-4 mb-4">
                <div className="px-6 py-6 backdrop-blur-sm bg-indigo-800/30 rounded-2xl shadow-md border border-indigo-500/20 relative">
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30"></div>
                    <div className="flex justify-between items-center mb-2 relative z-10">
                        <h3 className="text-sm font-semibold text-indigo-100">Course Progress</h3>
                        <span className="text-xs font-bold text-indigo-900 bg-indigo-300 px-2 py-1 rounded-full">
                            {userCourseList?.length}/5
                        </span>
                    </div>
                    <Progress
                        value={(userCourseList?.length / 5) * 100}
                        className="h-2 bg-indigo-900/50"
                    />
                    <div className="mt-4 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-xs text-indigo-200">
                            Upgrade to <span className="font-medium text-indigo-300">Pro</span> for unlimited course generation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;