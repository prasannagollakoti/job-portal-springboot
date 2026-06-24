import API from "../services/api";
import toast from "react-hot-toast";
function JobCard({ job }) {

    const applyJob = async () => {

        try {

            await API.post("/applications/apply", {
                jobId: job.id
            });

            toast.success("Applied Successfully");
        } catch (error) {

            console.log(error);
            toast.error("Failed to Save Job");

        }

    };

    const saveJob = async () => {

        try {

            await API.post(`/saved-jobs/save/${job.id}`);

            toast.success("Applied Successfully");

        } catch (error) {

            console.log(error);
            toast.error("Failed to Save Job");

        }

    };

    return (

        <div
            className="
            bg-white
            rounded-3xl
            border border-[#FAD6C8]
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            duration-300
            p-7
            flex
            flex-col
            h-full"
        >

            {/* Title */}

            <h2 className="text-3xl font-bold text-[#C76D4E] mb-5">

                {job.title}

            </h2>


            {/* Company */}

            <div className="flex items-center gap-2 text-lg text-[#4A3A33] font-semibold mb-3">

                🏢 {job.company}

            </div>


            {/* Location */}

            <div className="flex items-center gap-2 text-gray-600 mb-3">

                📍 {job.location}

            </div>


            {/* Job Type */}

            <div className="mb-3">

                <span
                    className="
                    bg-[#FFF2CC]
                    text-[#C76D4E]
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold"
                >

                    💼 {job.jobType?.replace("_", " ")}

                </span>

            </div>


            {/* Salary */}

            <div className="mb-5">

                <span
                    className="
                    bg-[#F4B942]
                    text-white
                    px-4
                    py-2
                    rounded-full
                    font-semibold"
                >

                    💰 ₹ {job.salary?.toLocaleString()}

                </span>

            </div>


            {/* Description */}

            <div className="text-gray-600 leading-7 flex-grow mb-8">

                {

                    job.description?.length > 120

                        ? job.description.substring(0, 120) + "..."

                        : job.description

                }

            </div>


            {/* Buttons */}

            <div className="grid grid-cols-2 gap-4">

                <button
                    onClick={applyJob}
                    className="
                    bg-[#F4B942]
                    text-white
                    py-3
                    rounded-2xl
                    min-w-[150px]
                    font-semibold
                    hover:bg-[#E7A92E]
                    duration-300"
                >

                    Apply Now

                </button>


                <button
                    onClick={saveJob}
                    className="
                    bg-[#E8B7C1]
                    text-[#4A3A33]
                    py-3
                    rounded-2xl
                    font-semibold
                    hover:bg-[#DFA0AF]
                    duration-300"
                >

                    Save Job

                </button>

            </div>

        </div>

    );

}

export default JobCard;