import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    const handleLogout = () => {

        localStorage.clear();

        toast.success("Logged Out Successfully");

        navigate("/login");

    };

    return (

        <nav className="sticky top-0 z-50 bg-[#C76D4E] text-white shadow-md">

            <div className="w-full px-8 py-3 flex justify-between items-center">

                {/* Logo */}

                <Link to="/">

                    <h1 className="text-3xl font-bold text-[#FFF9F2] hover:text-[#F4B942] duration-300">

                        Job Portal

                    </h1>

                </Link>


                {/* Menu */}

                <div className="flex items-center gap-8 ">

                    <Link
                        to="/"
                        className="hover:text-[#F4B942] duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/jobs"
                        className="hover:text-[#F4B942] duration-300"
                    >
                        Jobs
                    </Link>


                    {!token ? (

                        <>

                            <Link
                                to="/login"
                                className="hover:text-[#F4B942] duration-300"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="
                                bg-[#F4B942]
                                text-white
                                text-base
                                font-semibold
                                min-w-[110px]
                                py-2.5
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                hover:bg-[#E7A92E]
                                duration-300"
                            >
                                Register
                            </Link>

                        </>

                    ) : role === "USER" ? (

                        <>

                            <Link
                                to="/dashboard"
                                className="hover:text-[#F4B942]"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/applications"
                                className="hover:text-[#F4B942]"
                            >
                                Applications
                            </Link>

                            <Link
                                to="/saved-jobs"
                                className="hover:text-[#F4B942]"
                            >
                                Saved Jobs
                            </Link>
                            <Link
                                to="/profile"
                                className="hover:text-[#F4B942]"
                            >
                                Profile
                            </Link>

                            <span className="
                            bg-[#E8B7C1]
                            text-[#4A3A33]
                            px-5
                            py-2
                            rounded-2xl
                            font-semibold">

                                👋 {name}

                            </span>

                            <button
                                onClick={handleLogout}
                                className="
                                bg-[#F4B942]
                                px-6
                                py-2
                                rounded-2xl
                                font-semibold
                                hover:bg-[#E7A92E]
                                hover:scale-105
                                duration-300"
                            >
                                Logout
                            </button>

                        </>

                    ) : role === "RECRUITER" ? (

                        <>

                            <Link
                                to="/recruiter-dashboard"
                                className="hover:text-[#F4B942]"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/recruiter/jobs"
                                className="hover:text-[#F4B942]"
                            >
                                Manage Jobs
                            </Link>

                            <span className="
                            bg-[#E8B7C1]
                            text-[#4A3A33]
                            px-5
                            py-2
                            min-w-[150px]
                            rounded-2xl
                            font-semibold">

                                👋 {name}

                            </span>

                            <button
                                onClick={handleLogout}
                                className="
                                bg-[#F4B942]
                                text-white
                                text-base
                                font-semibold
                                min-w-[150px]
                                py-2.5
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                hover:bg-[#E7A92E]
                                duration-300"
                            >
                                Logout
                            </button>

                        </>

                    ) : (

                        <>

                            <Link
                                to="/admin-dashboard"
                                className="hover:text-[#F4B942]"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/admin/users"
                                className="hover:text-[#F4B942]"
                            >
                                Manage Users
                            </Link>

                            <Link
                                to="/admin/jobs"
                                className="hover:text-[#F4B942]"
                            >
                                Manage Jobs
                            </Link>

                            <span className="
                            bg-[#E8B7C1]
                            text-[#4A3A33]
                            px-5
                            py-2
                            rounded-2xl
                            font-semibold">

                                👋 {name}

                            </span>

                            <button
                                onClick={handleLogout}
                                className="
                                bg-[#F4B942]
                                px-6
                                py-2
                                rounded-2xl
                                font-semibold
                                hover:bg-[#E7A92E]
                                hover:scale-105
                                duration-300"
                            >
                                Logout
                            </button>

                        </>

                    )}

                </div>

            </div>

        </nav>

    );

}

export default Navbar;