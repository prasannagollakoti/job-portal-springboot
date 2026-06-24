import { useEffect, useState } from "react";
import API from "../services/api";
import JobCard from "../components/JobCard";

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    const [keyword, setKeyword] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {

        try {

            const response = await API.get("/jobs");

            setJobs(response.data);
            setAllJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const applyFilters = () => {

        let filtered = [...allJobs];

        if (keyword.trim() !== "") {

            filtered = filtered.filter(job =>
                job.title.toLowerCase().includes(keyword.toLowerCase())
            );

        }

        if (company.trim() !== "") {

            filtered = filtered.filter(job =>
                job.company.toLowerCase().includes(company.toLowerCase())
            );

        }

        if (location.trim() !== "") {

            filtered = filtered.filter(job =>
                job.location.toLowerCase().includes(location.toLowerCase())
            );

        }

        if (jobType !== "") {

            filtered = filtered.filter(
                job => job.jobType === jobType
            );

        }

        setJobs(filtered);

    };

    const clearFilters = () => {

        setKeyword("");
        setCompany("");
        setLocation("");
        setJobType("");

        setJobs(allJobs);

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF9F2] via-[#FFF4ED] to-[#FFE9DC] py-16 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">

                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#C76D4E] to-[#F4B942] bg-clip-text text-transparent mb-5">
                        Find Your Dream Job
                    </h1>
                    <div className="h-6"></div>
                    <p className="text-gray-600 text-lg">
                        Explore thousands of opportunities waiting for you.
                    </p>

                </div>

                <div className="h-6"></div>
                {/* Filter Card */}
                {/* Search Section */}
                <div className="flex justify-center mb-16">

                    <div className="
        w-full
        max-w-4xl
        bg-white
        rounded-[10px]
        shadow-2xl
        border border-[#FAD6C8]
        px-10
        py-10
    ">

                        <h2 className="text-3xl font-bold text-[#C76D4E] text-center mb-8">
                            🔎 Search Jobs
                        </h2>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search by title..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="
            w-full
            px-6
            py-4
            rounded-xl
            border-2
            border-[#FAD6C8]
            outline-none
            mb-6"
                        />

                        {/* Filters */}
                        <div className="grid md:grid-cols-3 gap-5 mb-8">

                            <input
                                type="text"
                                placeholder="🏢 Company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="
                px-5
                py-4
                rounded-xl
                border-2
                border-[#FAD6C8]
                outline-none"
                            />

                            <input
                                type="text"
                                placeholder="📍 Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="
                px-5
                py-4
                rounded-xl
                border-2
                border-[#FAD6C8]
                outline-none"
                            />

                            <select
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                className="
                px-5
                py-4
                rounded-2xl
                border-2
                border-[#FAD6C8]
                bg-white
                outline-none"
                            >
                                <option value="">💼 All Types</option>
                                <option value="FULL_TIME">FULL TIME</option>
                                <option value="PART_TIME">PART TIME</option>
                                <option value="INTERNSHIP">INTERNSHIP</option>
                            </select>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center gap-6">

                            <button
                                onClick={applyFilters}
                                className="
                bg-[#F4B942]
                text-white
                px-10
                py-3
                min-w-[150px]
                rounded-xl
                font-semibold
                hover:scale-105
                duration-300"
                            >
                                Search Jobs
                            </button>

                            <button
                                onClick={clearFilters}
                                className="
                bg-[#C76D4E]
                text-white
                px-10
                py-3
                rounded-xl
                min-w-[150px]
                font-semibold
                hover:scale-105
                duration-300"
                            >
                                Clear Filters
                            </button>

                        </div>

                    </div>

                </div>
                <div className="h-6"></div>
                {/* Jobs */}
                {
                    jobs.length === 0 ?

                        (
                            <div className="bg-white rounded-[40px] shadow-2xl p-20 text-center">

                                <div className="text-8xl mb-6">
                                    📭
                                </div>

                                <h2 className="text-4xl font-bold text-[#C76D4E] mb-4">
                                    No Jobs Found
                                </h2>

                                <p className="text-gray-500 text-lg">
                                    Try changing your filters.
                                </p>

                            </div>
                        )

                        :

                        (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

                                {
                                    jobs.map((job) => (

                                        <div
                                            key={job.id}
                                            className="
                                        hover:-translate-y-2
                                        duration-300"
                                        >
                                            <JobCard job={job} />
                                        </div>

                                    ))
                                }

                            </div>
                        )
                }

            </div>

        </div>
    );
}

export default Jobs;