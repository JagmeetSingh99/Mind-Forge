import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";

function TopicDescription() {
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
            <div className="absolute top-10 -right-10 w-32 h-32 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>

            <div className="rounded-2xl backdrop-blur-sm bg-gradient-to-b from-slate-50 via-indigo-50/20 to-purple-50/20 border border-indigo-100/50 shadow-lg relative z-10 p-6">
                <h2 className="text-xl font-semibold text-indigo-800 mb-6">
                    Course Details
                </h2>

                {/* Input Topic */}
                <div className="mb-6 bg-gradient-to-r from-indigo-100/40 to-slate-100/40 p-5 rounded-xl border border-indigo-200/40 shadow-sm">
                    <label className="block mb-2 text-sm font-medium text-indigo-700">
                        💡 Course Topic
                    </label>
                    <p className="text-xs text-indigo-600/80 mb-3">
                        Write the topic for which you want to generate a course (e.g., Python Course, Yoga, etc.)
                    </p>
                    <Input
                        placeholder="Enter your course topic"
                        defaultValue={userCourseInput?.topic}
                        className="h-14 text-lg bg-white/70 border-indigo-200"
                        onChange={(e) => handleInputChange('topic', e.target.value)}
                    />
                </div>

                {/* Text Area */}
                <div className="bg-gradient-to-r from-slate-100/40 to-purple-100/40 p-5 rounded-xl border border-indigo-200/40 shadow-sm">
                    <label className="block mb-2 text-sm font-medium text-indigo-700">
                        📝 Course Description
                    </label>
                    <p className="text-xs text-indigo-600/80 mb-3">
                        Tell us more about your course, what you want to include in the course (Optional)
                    </p>
                    <Textarea
                        placeholder="Describe your course content and goals..."
                        defaultValue={userCourseInput?.description}
                        className="min-h-[150px] text-lg bg-white/70 border-indigo-200"
                        onChange={(e) => handleInputChange('description', e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopicDescription