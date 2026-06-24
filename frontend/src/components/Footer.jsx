import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="bg-[#C76D4E] text-white w-full mt-auto">

            <div className="px-8 py-5">

                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Left Section */}
                    <div>

                        <h2 className="text-2xl font-bold text-[#F4B942]">
                            Job Portal
                        </h2>

                        <p className="text-sm text-[#FFF9F2] mt-1">
                            Find jobs. Hire talent. Build careers.
                        </p>

                    </div>


                    {/* Right Section */}
                    <div className="flex gap-16 text-sm mt-4 md:mt-0">

                        {/* Explore */}
                        <div>

                            <h3 className="font-semibold mb-1">
                                Explore
                            </h3>

                            <Link
                                to="/jobs"
                                className="block hover:text-[#F4B942] duration-300"
                            >
                                Jobs
                            </Link>

                            <Link
                                to="/companies"
                                className="block hover:text-[#F4B942] duration-300"
                            >
                                Companies
                            </Link>

                        </div>


                        {/* Resources */}
                        <div>

                            <h3 className="font-semibold mb-1">
                                Resources
                            </h3>

                            <Link
                                to="/help"
                                className="block hover:text-[#F4B942] duration-300"
                            >
                                Help Center
                            </Link>

                            <Link
                                to="/contact"
                                className="block hover:text-[#F4B942] duration-300"
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                </div>

                <hr className="border-[#FAD6C8] my-4" />

                <p className="text-center text-sm text-[#FFF9F2]">
                    © 2026 Job Portal • React + Spring Boot ❤️
                </p>

            </div>

        </footer>

    );

}

export default Footer;