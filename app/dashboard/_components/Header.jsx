import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
    return (
        <div className="w-full bg-gradient-to-r from-slate-200 via-indigo-100 to-purple-200 backdrop-blur-sm shadow-sm border-b border-indigo-100">
            <div className="max-w-7xl mx-auto relative">
                {/* Decorative elements */}
                <div className="absolute -top-2 right-1/4 w-24 h-24 bg-gradient-to-r from-slate-200 to-indigo-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-2 left-1/3 w-24 h-24 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
                <div className="flex justify-between items-center py-3 px-5 relative z-10">
                    <div className="flex-shrink-0 transform hover:scale-105 transition-all duration-300">
                        <Image src="/favicon.svg" width={90} height={40} alt="favicon" className="object-contain" />
                    </div>
                    <div className="flex-grow mx-4 flex justify-center">
                        <Image
                            src="/animated-header.svg"
                            width={300}
                            height={60}
                            alt="header"
                            className="object-contain h-10"
                            priority
                        />
                    </div>
                    <div className="flex-shrink-0 rounded-full p-0.5 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-sm">
                        <UserButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;