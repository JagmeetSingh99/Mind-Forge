import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";

function SelectOption() {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

    const handleInputChange = (fieldName, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldName]: value
        }))
    }

    return (
        <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 left-20 w-32 h-32 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>

            <div className="rounded-2xl backdrop-blur-sm bg-gradient-to-b from-slate-50 via-indigo-50/20 to-purple-50/20 border border-indigo-100/50 shadow-lg relative z-10 p-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-6">
                    Course Configuration
                </h2>

                <div className="flex flex-col gap-6">
                    {/* Top Row - Two columns */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Column */}
                        <div className="flex-1 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-xl border border-indigo-200/40 shadow-sm p-5">
                            <div className="flex items-center mb-3">
                                <span className="text-xl mr-2">🎓</span>
                                <label className="text-sm font-medium text-indigo-700">Difficulty Level</label>
                            </div>
                            <Select onValueChange={(value) => handleInputChange('level', value)} defaultValue={userCourseInput?.level}>
                                <SelectTrigger className="h-14 text-lg bg-white/70 border-indigo-200">
                                    <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Beginner">Beginner</SelectItem>
                                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                                    <SelectItem value="Advance">Advance</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 bg-gradient-to-bl from-cyan-100/40 to-indigo-100/40 rounded-xl border border-indigo-200/40 shadow-sm p-5">
                            <div className="flex items-center mb-3">
                                <span className="text-xl mr-2">📖</span>
                                <label className="text-sm font-medium text-indigo-700">No. of Chapters</label>
                            </div>
                            <Input
                                type="number"
                                className="h-14 text-lg bg-white/70 border-indigo-200"
                                defaultValue={userCourseInput?.noOfChapters}
                                onChange={(e) => handleInputChange('noOfChapters', e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Bottom Row - Two columns */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Column */}
                        <div className="flex-1 bg-gradient-to-tr from-slate-100/40 to-indigo-100/40 rounded-xl border border-indigo-200/40 shadow-sm p-5">
                            <div className="flex items-center mb-3">
                                <span className="text-xl mr-2">⏰</span>
                                <label className="text-sm font-medium text-indigo-700">Course Duration</label>
                            </div>
                            <Select onValueChange={(value) => handleInputChange('duration', value)} defaultValue={userCourseInput?.duration}>
                                <SelectTrigger className="h-14 text-lg bg-white/70 border-indigo-200">
                                    <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1 Hour">1 Hour</SelectItem>
                                    <SelectItem value="2 Hours">2 Hours</SelectItem>
                                    <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 bg-gradient-to-tl from-purple-100/40 to-slate-100/40 rounded-xl border border-indigo-200/40 shadow-sm p-5">
                            <div className="flex items-center mb-3">
                                <span className="text-xl mr-2">▶️</span>
                                <label className="text-sm font-medium text-indigo-700">Include Video</label>
                            </div>
                            <Select onValueChange={(value) => handleInputChange('displayVideo', value)} defaultValue={userCourseInput?.displayVideo}>
                                <SelectTrigger className="h-14 text-lg bg-white/70 border-indigo-200">
                                    <SelectValue placeholder="Select option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectOption