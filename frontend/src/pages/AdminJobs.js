import { useEffect, useState } from "react";
import API from "../services/api";

function AdminJobs() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {

        try {

            const response = await API.get("/admin/jobs");

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`/admin/jobs/${id}`);

            fetchJobs();

        } catch (error) {

            console.log(error);

        }

    };

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-10">

            <h1 className="text-5xl font-bold text-[#C76D4E] text-center mb-10">

                Manage Jobs

            </h1>

            {/* Search */}

            <div className="flex justify-center mb-10">

                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                    w-[450px]
                    bg-white
                    border border-[#FAD6C8]
                    rounded-2xl
                    px-5
                    py-3
                    shadow-md
                    outline-none"
                />

            </div>


            {/* Table */}

            <div className="bg-white rounded-3xl shadow-lg overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-[#C76D4E] text-white">

                    <tr>

                        <th className="p-5">ID</th>
                        <th className="p-5">Title</th>
                        <th className="p-5">Company</th>
                        <th className="p-5">Location</th>
                        <th className="p-5">Action</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        filteredJobs.map((job) => (

                            <tr
                                key={job.id}
                                className="border-b hover:bg-[#FFF7F3]"
                            >

                                <td className="p-5 text-center">

                                    {job.id}

                                </td>

                                <td className="p-5 text-center">

                                    {job.title}

                                </td>

                                <td className="p-5 text-center">

                                    {job.company}

                                </td>

                                <td className="p-5 text-center">

                                    {job.location}

                                </td>

                                <td className="p-5 text-center">

                                    <button
                                        onClick={() => handleDelete(job.id)}
                                        className="
                                            bg-red-500
                                            text-white
                                            px-5
                                            py-2
                                            rounded-xl
                                            hover:bg-red-600
                                            duration-300"
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminJobs;