import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalJobs: 0,
        totalApplications: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {

        try {

            const response = await API.get("/admin/stats");

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-12">

            <h1 className="text-6xl font-bold text-[#C76D4E] text-center mb-16">

                Admin Dashboard

            </h1>

            <div className="h-8"></div>
            {/* Statistics Cards */}

            <div className="grid md:grid-cols-3 gap-8 mb-20">

                <div className="bg-white border border-[#FAD6C8] rounded-3xl shadow-lg p-8 text-center">

                    <h2 className="text-2xl font-semibold text-[#4A3A33]">

                        Total Users

                    </h2>

                    <p className="text-5xl font-bold text-[#C76D4E] mt-5">

                        {stats.totalUsers}

                    </p>

                </div>


                <div className="bg-white border border-[#FAD6C8] rounded-3xl shadow-lg p-8 text-center">

                    <h2 className="text-2xl font-semibold text-[#4A3A33]">

                        Total Jobs

                    </h2>

                    <p className="text-5xl font-bold text-[#C76D4E] mt-5">

                        {stats.totalJobs}

                    </p>

                </div>


                <div className="bg-white border border-[#FAD6C8] rounded-3xl shadow-lg p-8 text-center">

                    <h2 className="text-2xl font-semibold text-[#4A3A33]">

                        Total Applications

                    </h2>

                    <p className="text-5xl font-bold text-[#C76D4E] mt-5">

                        {stats.totalApplications}

                    </p>

                </div>

            </div>


            <div className="h-8"></div>

            <div className="flex justify-center">

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Manage Users */}

                    <Link to="/admin/users">

                        <div
                            className="
                            bg-white
                            border border-[#FAD6C8]
                            rounded-3xl
                            shadow-lg
                            hover:shadow-2xl
                            hover:-translate-y-2
                            duration-300
                            w-[320px]
                            h-[250px]
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-center
                            gap-5"
                        >

                            <div className="text-6xl">
                                👤
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E]">

                                Manage Users

                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">

                                View, manage and remove users from the platform.

                            </p>

                        </div>

                    </Link>


                    {/* Manage Jobs */}

                    <Link to="/admin/jobs">

                        <div
                            className="
                            bg-white
                            border border-[#FAD6C8]
                            rounded-3xl
                            shadow-lg
                            hover:shadow-2xl
                            hover:-translate-y-2
                            duration-300
                            w-[320px]
                            h-[250px]
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-center
                            gap-5"
                        >

                            <div className="text-6xl">
                                💼
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E]">

                                Manage Jobs

                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">

                                Monitor and remove jobs across the portal.

                            </p>

                        </div>

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;