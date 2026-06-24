import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function SavedJobs() {

    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {

        fetchSavedJobs();

    }, []);

    const fetchSavedJobs = async () => {

        try {

            const response = await API.get("/saved-jobs/my");

            setSavedJobs(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const removeSavedJob = async (jobId) => {

        try {

            await API.delete(`/saved-jobs/${jobId}`);

           toast.success("Job removed successfully");

            fetchSavedJobs();

        }
        catch (error) {

            console.log(error);

           toast.error("Failed to remove job");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] p-10">

            <h1 className="text-6xl font-bold text-center text-[#C76D4E] mb-14">

                ❤️ Saved Jobs

            </h1>
            <div className="h-8"></div>

            {

                savedJobs.length === 0 ? (

                    <div className="text-center text-2xl text-gray-500">

                        No Saved Jobs Found

                    </div>

                ) : (
                    <div className="flex justify-center">

                    <div className="grid md:grid-cols-3 gap-10">

                        {

                            savedJobs.map((job) => (

                                <div
                                    key={job.id}
                                    className="
                                    bg-white
                                    border-2
                                    border-[#FAD6C8]
                                    p-8
                                    rounded-3xl
                                    shadow-lg
                                    hover:shadow-2xl
                                    hover:-translate-y-1
                                    duration-300
                                    justify-items-center
                                    w-[300px]
                                    h-[130px]"
                                >

                                    <h2 className="text-3xl font-bold text-[#C76D4E]">

                                        {job.title}

                                    </h2>

                                    <p className="mt-4 text-lg text-gray-700">

                                        🏢 Company : {job.company}

                                    </p>

                                    <p className="mt-3 text-gray-600">

                                        📍 Location : {job.location}

                                    </p>

                                    <div className="flex justify-center mt-8">

                                        <div className="flex justify-center mt-8">

                                            <button
                                                onClick={() => removeSavedJob(job.id)}
                                                className="
        bg-red-500
        text-white
        text-lg
        font-semibold
        px-10
        py-4
        rounded-2xl
        shadow-lg
        min-w-[150px]
        hover:bg-red-600
        hover:scale-105
        duration-300"
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))

                        }

                    </div></div>
                )

            }

        </div>

    );

}

export default SavedJobs;