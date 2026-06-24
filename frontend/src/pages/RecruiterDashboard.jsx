import { Link } from "react-router-dom";

function RecruiterDashboard() {

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-12">

            <h1 className="text-6xl font-bold text-[#C76D4E] text-center mb-16">

                Recruiter Dashboard

            </h1>
            <div className="h-8"></div>
            <div className="flex justify-center">

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Create Job */}
                    <Link to="/create-job">

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
                                ➕
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E]">
                                Create Job
                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">
                                Post new opportunities and reach talented candidates.
                            </p>

                        </div>

                    </Link>


                    {/* Manage Jobs */}
                    <Link to="/recruiter/jobs">

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
                                📋
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E}">
                                Manage Jobs
                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">
                                Edit, update and manage all your posted jobs.
                            </p>

                        </div>

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default RecruiterDashboard;