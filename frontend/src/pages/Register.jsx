import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
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

            await API.post("/auth/register", formData);

            toast.success("Registration Successful");

            navigate("/login");

        }
        catch {

            toast.error("Registration Failed");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center px-6">

            <div className="max-w-5xl w-full bg-white rounded-[15px] shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* Left Side */}
                <div className="hidden md:flex flex-col justify-center bg-[#C76D4E] p-10 text-white">

                    <h1 className="text-5xl font-bold leading-tight">

                        Find Your
                        <br />
                        Dream Career 🚀

                    </h1>

                    <p className="mt-8 text-lg leading-relaxed">

                        Join thousands of job seekers and recruiters
                        building their future together.

                    </p>

                    <div className="mt-12 space-y-3 text-xl">

                        <div>🔍 Search Jobs</div>

                        <div>📄 Upload Resume</div>

                        <div>💼 Apply Easily</div>

                        <div>🔔 Track Applications</div>

                    </div>

                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-center px-8 py-14">

                    <h1 className="text-4xl font-bold text-center text-[#C76D4E] mb-10">

                        Create Account

                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-4"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
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

                        <select
                            name="role"
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

                            <option value="USER">
                                USER
                            </option>

                            <option value="RECRUITER">
                                RECRUITER
                            </option>

                        </select>

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
                            hover:bg-[#E7A92E]
                            duration-300"
                        >

                            Register

                        </button>

                    </form>

                    <p className="text-center mt-8 text-gray-600">

                        Already have an account?

                        <Link
                            to="/login"
                            className="ml-2 font-bold text-[#C76D4E] hover:text-[#F4B942]"
                        >

                            Login

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Register;