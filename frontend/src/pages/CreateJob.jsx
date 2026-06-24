import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CreateJob() {

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        description: "",
        company: "",
        location: "",
        salary: "",
        jobType: "FULL_TIME"
    });

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/jobs", job);

            toast.success("Job Created Successfully");
            navigate("/recruiter/jobs");

        }
        catch (error) {

            console.log(error);
            toast.error("Failed to Create Job");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] flex justify-center items-center px-6 ">

            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-xl py-10 px-20">

                <h1 className="text-6xl font-bold text-center text-[#C76D4E] mb-10">

                    Create Job

                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center gap-5"
                >

                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={job.title}
                        onChange={handleChange}
                        className="
        w-[85%]
        px-5
        py-3
        rounded-2xl
        border-2
        border-[#FAD6C8]
        focus:border-[#F4B942]
        outline-none
        duration-300"
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={job.description}
                        onChange={handleChange}
                        rows="5"
                        className="
        w-[85%]
        px-5
        py-3
        rounded-3xl
        border-2
        border-[#FAD6C8]
        focus:border-[#F4B942]
        outline-none
        duration-300
        resize-none"
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={job.company}
                        onChange={handleChange}
                        className="
        w-[85%]
        px-5
        py-3
        rounded-2xl
        border-2
        border-[#FAD6C8]
        focus:border-[#F4B942]
        outline-none
        duration-300"
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={job.location}
                        onChange={handleChange}
                        className="
        w-[85%]
        px-5
        py-3
        rounded-2xl
        border-2
        border-[#FAD6C8]
        focus:border-[#F4B942]
        outline-none
        duration-300"
                    />

                    <input
                        type="number"
                        name="salary"
                        placeholder="Salary"
                        value={job.salary}
                        onChange={handleChange}
                        className="
        w-[85%]
        px-5
        py-3
        rounded-2xl
        border-2
        border-[#FAD6C8]
        focus:border-[#F4B942]
        outline-none
        duration-300"
                    />

                    <select
                        name="jobType"
                        value={job.jobType}
                        onChange={handleChange}
                        className="
        w-[85%]
        px-5
        py-3
        rounded-2xl
        border-2
        border-[#FAD6C8]
        focus:border-[#F4B942]
        outline-none
        duration-300"
                    >
                        <option value="FULL_TIME">FULL TIME</option>
                        <option value="PART_TIME">PART TIME</option>
                        <option value="INTERNSHIP">INTERNSHIP</option>
                        <option value="REMOTE">REMOTE</option>
                    </select>

                    <button
                        type="submit"
                        className="
        w-[85%]
        bg-[#F4B942]
        text-white
        py-3
        rounded-2xl
        text-xl
        font-semibold
        shadow-lg
        hover:bg-[#E5A92F]
        duration-300"
                    >
                        Create Job
                    </button>

                </form>

            </div>

        </div>

    );

}

export default CreateJob;