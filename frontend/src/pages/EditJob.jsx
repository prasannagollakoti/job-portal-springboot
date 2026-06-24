import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function EditJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        description: "",
        company: "",
        location: "",
        salary: "",
        jobType: "FULL_TIME"
    });

    useEffect(() => {

        fetchJob();

    }, []);

    const fetchJob = async () => {

        try {

            const response = await API.get(`/jobs/${id}`);

            setJob(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.put(
                `/recruiter/jobs/${id}`,
                job
            );

            toast.success("Job Updated Successfully");

            navigate("/recruiter/jobs");

        }
        catch (error) {

            console.log(error);

            toast.error("Update Failed");

        }

    };

    return (
        <div className="min-h-screen bg-[#FFF9F2] flex justify-center items-center p-6">

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">

                <h1 className="text-3xl font-bold text-[#C76D4E] mb-8 text-center">
                    Edit Job
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="title"
                        value={job.title}
                        placeholder="Job Title"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        rows="5"
                        value={job.description}
                        placeholder="Job Description"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="company"
                        value={job.company}
                        placeholder="Company Name"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="location"
                        value={job.location}
                        placeholder="Location"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="salary"
                        value={job.salary}
                        placeholder="Salary"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                        onChange={handleChange}
                    />

                    <select
                        name="jobType"
                        value={job.jobType}
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                        onChange={handleChange}
                    >
                        <option value="FULL_TIME">FULL TIME</option>
                        <option value="PART_TIME">PART TIME</option>
                        <option value="INTERNSHIP">INTERNSHIP</option>
                        <option value="REMOTE">REMOTE</option>
                    </select>

                    <button
                        className="w-full bg-[#C76D4E] hover:bg-[#b85f42] text-white py-4 rounded-xl font-semibold text-lg transition"
                    >
                        Update Job
                    </button>

                </form>

            </div>

        </div>
    );
}

export default EditJob;