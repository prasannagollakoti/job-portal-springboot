import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function ManageJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {

        try {

            const response = await API.get("/admin/jobs");
            setJobs(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const deleteJob = async (id) => {

        try {

            await API.delete(`/admin/jobs/${id}`);

            toast.success("Job Deleted Successfully");

            fetchJobs();

        }
        catch (error) {

            console.log(error);

            toast.error("Failed to Delete Job");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] p-10">

            <h1 className="text-6xl font-bold text-[#C76D4E] text-center mb-14">

                Manage Jobs

            </h1>
            <div className="h-8"></div>
            {
                jobs.length === 0 ? (

                    <div className="text-center text-2xl text-gray-500">

                        No Jobs Found

                    </div>

                ) : (

                    <div className="grid md:grid-cols-3 gap-10">

                        {

                            jobs.map((job) => (

                                <div
                                    key={job.id}
                                    className="
                                    bg-white
                                    border border-[#FAD6C8]
                                    rounded-3xl
                                    shadow-lg
                                    hover:shadow-2xl
                                    hover:-translate-y-1
                                    duration-300
                                    w-[380px]
                                    p-8"
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

                                    <p className="mt-3 text-gray-600">

                                        💰 Salary : ₹{job.salary}

                                    </p>

                                    <p className="mt-3 text-gray-600">

                                        💼 Type : {job.jobType}

                                    </p>

                                    <div className="flex justify-center mt-8">

                                        <button
                                            onClick={() => deleteJob(job.id)}
                                            className="
                                            bg-red-500
                                            text-white
                                            px-10
                                            py-3
                                            rounded-2xl
                                            shadow-md
                                            text-lg
                                            font-semibold
                                            hover:bg-red-600
                                            duration-300"
                                        >

                                            Delete Job

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default ManageJobs;