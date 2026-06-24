import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function RecruiterJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        fetchJobs();

    }, []);

    const fetchJobs = async () => {

        try {

            const response = await API.get(
                "/recruiter/jobs"
            );

            setJobs(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const deleteJob = async (id) => {

        try {

            await API.delete(
                `/recruiter/jobs/${id}`
            );

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

            <h1 className="text-6xl font-bold text-center text-[#C76D4E] mb-14">

                Manage Jobs

            </h1>
            <div className="h-8"></div>
            <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-10 px-8">

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

                            <p className="mt-4 text-gray-700">

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


                            <div className="flex justify-center gap-4 mt-8 flex-wrap">

                                <Link to={`/edit-job/${job.id}`}>

                                    <button
                                        className="bg-[#F4B942] text-white min-w-[150px] py-3 rounded-2xl shadow-md hover:bg-[#E5A92F] duration-300"
                                    >
                                        Edit
                                    </button>

                                </Link>


                                <button
                                    onClick={() => deleteJob(job.id)}
                                    className="
                                    bg-red-500
                                    text-white
                                    min-w-[150px]
                                    py-3
                                    rounded-2xl
                                    shadow-md
                                    hover:bg-red-600
                                    duration-300"
                                    >
                                    Delete
                                </button>


                                <Link to={`/applicants/${job.id}`}>

                                    <button
                                        className="bg-[#E8B7C1] text-[#4A3A33] px-6 py-3 min-w-[150px] rounded-2xl shadow-md hover:scale-105 duration-300"
                                    >
                                        View Applicants
                                    </button>

                                </Link>

                            </div>

                        </div>

                    ))

                }

            </div></div>

        </div>

    );

}

export default RecruiterJobs;