import { Link } from "react-router-dom";

function UserDashboard() {

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-12">

            <h1 className="text-6xl font-bold text-[#C76D4E] text-center mb-16">
                User Dashboard
            </h1>
            <div className="h-8"></div>
            <div className="flex justify-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Browse Jobs */}
                    <Link to="/jobs">

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
                                🔍
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E]">
                                Browse Jobs
                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">
                                Search thousands of opportunities and discover your next career move.
                            </p>

                        </div>

                    </Link>


                    {/* Applications */}
                    <Link to="/applications">

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
                                📄
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E]">
                                My Applications
                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">
                                Track the status of all the jobs you've applied to.
                            </p>

                        </div>

                    </Link>


                    {/* Saved Jobs */}
                    <Link to="/saved-jobs">

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
                                ❤️
                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E]">
                                Saved Jobs
                            </h2>

                            <p className="text-gray-600 leading-7 text-lg px-6">
                                Keep track of interesting jobs and revisit them anytime.
                            </p>

                        </div>

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default UserDashboard;