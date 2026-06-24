import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-[#FFF9F2] px-6 min-h-[calc(100vh-160px)] flex items-center justify-center">

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center w-full">

                {/* Title */}
                <h1 className="text-6xl md:text-7xl font-bold">

                    <span className="text-[#C76D4E]">
                        Find Your
                    </span>{" "}

                    <span className="text-[#F4B942]">
                        Dream Job
                    </span>

                </h1>


                {/* Paragraph */}
                <p className="mt-6 text-l md:text-xl text-gray-700 max-w-xl leading-relaxed">

                    Discover thousands of opportunities and connect with
                    companies that value your skills and ambitions.

                </p>
                <div className="h-8"></div>

                {/* Buttons */}
                {/* Buttons */}
                <div className="flex justify-center gap-8 mt-8 flex-wrap">

                    <Link to="/jobs">

                        <button
                            className="
                            bg-[#F4B942]
                            text-white
                            px-8
                            py-3
                            rounded-2xl
                            text-lg
                            min-w-[150px]
                            font-semibold
                            shadow-lg
                            hover:bg-[#E7A92E]
                            hover:scale-105
                            duration-300"
                        >

                            Browse Jobs

                        </button>

                    </Link>


                    <Link to="/create-job">

                        <button
                            className="
                            bg-[#E8B7C1]
                            text-[#4A3A33]
                            px-8
                            py-3
                            rounded-2xl
                            text-lg
                            font-semibold
                            min-w-[150px]
                            shadow-lg
                            hover:scale-105
                            duration-300"
                        >

                            Post a Job

                        </button>

                    </Link>

                </div>
                <div className="h-8"></div>

                {/* cards */}
                <div className="grid md:grid-cols-3 gap-10 justify-items-center mt-16">

                    {/* Search */}
                    <div
                        className="
                        w-[260px]
                        bg-white
                        p-6
                        rounded-3xl
                        shadow-lg
                        border border-[#FAD6C8]
                        text-center"
                    >

                        <h2 className="text-3xl font-bold text-[#C76D4E]">

                            🔍 Search

                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">

                            Explore thousands of jobs and discover
                            opportunities that match your passion.

                        </p>

                    </div>


                    {/* Apply */}
                    <div
                        className="
                        w-[260px]
                        bg-white
                        p-6
                        rounded-3xl
                        shadow-lg
                        border border-[#FAD6C8]
                        text-center"
                    >

                        <h2 className="text-3xl font-bold text-[#C76D4E]">

                            🚀 Apply

                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">

                            Apply quickly and keep track of all your
                            applications in one place.

                        </p>

                    </div>


                    {/* Grow */}
                    <div
                        className="
                        w-[260px]
                        bg-white
                        p-6
                        rounded-3xl
                        shadow-lg
                        border border-[#FAD6C8]
                        text-center"
                    >

                        <h2 className="text-3xl font-bold text-[#C76D4E]">

                            🌟 Grow

                        </h2>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">

                            Build your career with opportunities tailored
                            to your goals and ambitions.

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;

