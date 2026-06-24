import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
function ManageUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        try {

            const response = await API.get("/admin/users");
            setUsers(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const deleteUser = async (id) => {

        try {

            await API.delete(`/admin/users/${id}`);

            toast.success("User Deleted Successfully");

            fetchUsers();

        }
        catch (error) {

            console.log(error);

            toast.error("Failed to Delete User");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-12">

            <h1 className="text-6xl font-bold text-center text-[#C76D4E] mb-16">

                Manage Users

            </h1>
            <div className="h-8"></div>
            <div className="flex justify-center">

                <div className="grid md:grid-cols-3 gap-10">

                    {

                        users.map((user) => (

                            <div
                                key={user.id}
                                className="
                                bg-white
                                border border-[#FAD6C8]
                                rounded-3xl
                                shadow-lg
                                hover:shadow-2xl
                                hover:-translate-y-2
                                duration-300
                                w-[320px]
                                p-8
                                text-center"
                            >

                                <h2 className="text-3xl font-bold text-[#C76D4E] mb-6">

                                    {user.name}

                                </h2>

                                <p className="text-gray-700 mb-3">

                                    📧 {user.email}

                                </p>

                                <p className="text-gray-600 mb-8">

                                    👤 Role : {user.role}

                                </p>

                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="
                                    bg-red-500
                                    text-white
                                    px-6
                                    py-3
                                    rounded-2xl
                                    shadow-md
                                    hover:bg-red-600
                                    duration-300"
                                >

                                    Delete User

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default ManageUsers;