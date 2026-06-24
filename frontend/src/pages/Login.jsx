import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";
function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/login",
                formData
            );

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.id);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("userId", response.data.id);

            toast.success("Login Successful");

            if (response.data.role === "RECRUITER") {

                navigate("/recruiter-dashboard");

            }
            else if (response.data.role === "ADMIN") {

                navigate("/admin-dashboard");

            }
            else {

                navigate("/dashboard");

            }

        }
        catch (error) {

            toast.error("Invalid Credentials");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center px-6">

            <div className="max-w-5xl w-full bg-white rounded-[15px] shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* Left Side */}
                <div className="hidden md:flex flex-col justify-center bg-[#C76D4E] p-10 text-white">

                    <h1 className="text-5xl font-bold leading-tight">

                        Welcome
                        <br />
                        Back 👋

                    </h1>

                    <p className="mt-8 text-lg leading-relaxed">

                        Continue your journey and access thousands
                        of exciting opportunities.

                    </p>

                    <div className="mt-12 space-y-3 text-xl">

                        <div>🔍 Find Jobs</div>

                        <div>📄 Manage Resume</div>

                        <div>💼 Track Applications</div>

                        <div>🚀 Grow Your Career</div>

                    </div>

                </div>


                {/* Right Side */}
                <div className="flex flex-col justify-center px-14 py-14">

                    <h1 className="text-3xl font-bold text-center text-[#C76D4E] mb-10">

                        Welcome Back

                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-4"
                    >

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
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
                            type="password"
                            name="password"
                            placeholder="Password"
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

                        <button
                            className="
                        w-[85%]
                        bg-[#F4B942]
                        text-white
                        py-3
                        rounded-2xl
                        text-lg
                        font-semibold
                        shadow-lg
                        hover:bg-[#E5A92F]
                        duration-300"
                        >

                            Login

                        </button>

                    </form>

                    <p className="text-center mt-8 text-gray-600">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="ml-2 text-[#C76D4E] font-bold hover:text-[#F4B942]"
                        >

                            Register

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;