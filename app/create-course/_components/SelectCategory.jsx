import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import { useContext } from "react";

function SelectCategory() {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

    const handleCategoryChange = (category) => {
        setUserCourseInput(prev => ({
            ...prev,
            category: category
        }))
    }

    return (
        <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-10 left-20 w-24 h-24 bg-gradient-to-r from-slate-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>

            <div className="rounded-2xl backdrop-blur-sm bg-gradient-to-b from-slate-50 via-indigo-50/20 to-purple-50/20 border border-indigo-100/50 shadow-lg relative z-10 p-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-6">
                    Select the Course Category
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {CategoryList?.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-5 border items-center rounded-xl transition-all duration-300 cursor-pointer
                                ${userCourseInput?.category == item.name
                                    ? 'border-indigo-400 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 shadow-md transform scale-105'
                                    : 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:transform hover:scale-105'}`}
                            onClick={() => handleCategoryChange(item.name)}
                        >
                            <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110">
                                <Image src={item.icon} width={60} height={60} alt="category_img" className="object-contain" />
                            </div>
                            <h2 className="font-medium text-indigo-700">{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SelectCategory