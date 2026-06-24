import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
function Profile() {

    const [profile, setProfile] = useState({
        id: "",
        name: "",
        email: "",
        role: ""
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: ""
    });
    const [file, setFile] = useState(null);
    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {

        try {

            const response = await API.get("/users/profile");

            setProfile(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleProfileChange = (e) => {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    };

    const handlePasswordChange = (e) => {

        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });

    };

    const updateProfile = async (e) => {

        e.preventDefault();

        try {

            await API.put("/users/profile", {
                name: profile.name,
                email: profile.email
            });

           toast.success("Profile Updated Successfully");

        } catch (error) {

            toast.error("Failed to update profile");

        }

    };

    const changePassword = async (e) => {

        e.preventDefault();

        try {

            await API.put("/users/change-password", passwordData);

            alert("Password Changed Successfully");

            setPasswordData({
                currentPassword: "",
                newPassword: ""
            });

        } catch (error) {

            alert("Failed to change password");

        }

    };
    const uploadResume = async (e) => {

        e.preventDefault();

        if (!file) {

            alert("Please select a PDF file");

            return;

        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            await API.post(
                "/resume/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert("Resume uploaded successfully");

        } catch (error) {

            alert("Upload failed");

        }

    };
    const downloadResume = async () => {

        try {

            const response = await API.get(
                `/resume/download/${profile.id}`,
                {
                    responseType: "blob"
                }
            );

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;

            link.setAttribute("download", "resume.pdf");

            document.body.appendChild(link);

            link.click();

        } catch (error) {

            alert("No resume found");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] p-20">

            <div className="max-w-6xl mx-auto px-16">

                <h1 className="text-5xl md:text-6xl font-bold text-center">

            <span className="text-[#C76D4E]">
                My
            </span>{" "}

                    <span className="text-[#F4B942]">
                Profile
            </span>

                </h1>
                <div className="h-8"></div>
                <div className="flex justify-center mt-16">
                    <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Card */}

                    <div className="bg-white rounded-xl shadow-xl border border-[#FAD6C8] p-12 flex flex-col items-center h-[210px] w-[500px]">

                        <div className="
                w-26 h-26
                rounded-full
                bg-[#C76D4E]
                flex items-center justify-center
                text-white text-6xl font-bold">

                            {profile.name.charAt(0)}

                        </div>

                        <h2 className="text-4xl font-bold text-[#C76D4E] mt-8">

                            {profile.name}

                        </h2>

                        <p className="text-gray-600 text-lg mt-3">

                            {profile.email}

                        </p>
                        <div className="mt-6 flex justify-center">
                        <span
                            className="
                            bg-[#F4B942]
                            text-white
                            px-6
                            py-2
                            min-w-[70px]
                            rounded-full
                            font-semibold"
                            >
                            {profile.role}
                            </span>
                        </div>

                    </div>
                    {/* Edit Profile */}

                    <div className="bg-white rounded-3xl shadow-xl border border-[#FAD6C8] px-16 py-12">

                        <h2 className="text-4xl font-bold text-center text-[#C76D4E] mb-10">

                            Edit Profile

                        </h2>

                        <form
                            onSubmit={updateProfile}
                            className="flex flex-col items-center gap-5"
                        >

                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleProfileChange}
                                className="
                        w-[85%]
                        px-5 py-3
                        rounded-2xl
                        border-2 border-[#FAD6C8]
                        outline-none
                        focus:border-[#F4B942]"
                            />

                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                className="
                        w-[85%]
                        px-5 py-3
                        rounded-2xl
                        border-2 border-[#FAD6C8]
                        outline-none
                        focus:border-[#F4B942]"
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
                        hover:bg-[#E5A92F]
                        duration-300">

                                Update Profile

                            </button>

                        </form>

                    </div>

                </div>
                </div>

                {/* Password Card */}
                <div className="h-8"></div>

                <div className="flex justify-center gap-20 mt-16">

                    {/* Change Password Card */}
                    <div className="bg-white rounded-3xl shadow-xl border border-[#FAD6C8] px-20 py-12 w-[500px]">

                        <h2 className="text-4xl font-bold text-center text-[#C76D4E] mb-10">
                            Change Password
                        </h2>

                        <form
                            onSubmit={changePassword}
                            className="flex flex-col items-center gap-5"
                        >

                            <input
                                type="password"
                                name="currentPassword"
                                placeholder="Current Password"
                                value={passwordData.currentPassword}
                                onChange={handlePasswordChange}
                                className="
                w-[70%]
                px-5 py-3
                rounded-2xl
                border-2 border-[#FAD6C8]
                outline-none
                focus:border-[#F4B942]"
                            />

                            <input
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChange}
                                className="
                w-[70%]
                px-5 py-3
                rounded-2xl
                border-2 border-[#FAD6C8]
                outline-none
                focus:border-[#F4B942]"
                            />

                            <button
                                className="
                w-[70%]
                bg-[#C76D4E]
                text-white
                py-3
                rounded-2xl
                text-lg
                font-semibold
                hover:bg-[#B65C3E]
                duration-300"
                            >

                                Change Password

                            </button>

                        </form>

                    </div>

                    {/* Resume Management Card */}
                    <div className="bg-white rounded-3xl shadow-xl border border-[#FAD6C8] px-20 py-12 w-[500px]">

                        <h2 className="text-4xl font-bold text-center text-[#C76D4E] mb-10">

                            Resume Management

                        </h2>

                        <form
                            onSubmit={uploadResume}
                            className="flex flex-col items-center gap-5"
                        >

                            <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="
                w-[70%]
                px-5 py-3
                rounded-2xl
                border-2 border-[#FAD6C8]
                outline-none"
                            />

                            <button
                                className="
                w-[70%]
                bg-[#F4B942]
                text-white
                py-3
                rounded-2xl
                text-lg
                font-semibold"
                            >

                                Upload Resume

                            </button>

                            <button
                                type="button"
                                onClick={downloadResume}
                                className="
                w-[70%]
                bg-[#C76D4E]
                text-white
                py-3
                rounded-2xl
                text-lg
                font-semibold"
                            >

                                Download Resume

                            </button>

                        </form>

                    </div>

                </div></div>
        </div>

    );
}

export default Profile;