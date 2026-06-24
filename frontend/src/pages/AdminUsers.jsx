import { useEffect, useState } from "react";
import API from "../services/api";

function AdminUsers() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        try {

            const response = await API.get("/admin/users");

            setUsers(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`/admin/users/${id}`);

            fetchUsers();

        } catch (error) {

            console.log(error);

        }

    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-10">

            <h1 className="text-5xl font-bold text-[#C76D4E] text-center mb-10">

                Manage Users

            </h1>

            {/* Search */}

            <div className="flex justify-center mb-10">

                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                    w-[400px]
                    bg-white
                    border border-[#FAD6C8]
                    rounded-2xl
                    px-5
                    py-3
                    outline-none
                    shadow-md"
                />

            </div>

            {/* Table */}

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-[#C76D4E] text-white">

                    <tr>

                        <th className="p-5">ID</th>
                        <th className="p-5">Name</th>
                        <th className="p-5">Email</th>
                        <th className="p-5">Role</th>
                        <th className="p-5">Action</th>

                    </tr>

                    </thead>

                    <tbody>

                    {filteredUsers.map((user) => (

                        <tr
                            key={user.id}
                            className="border-b hover:bg-[#FFF7F3]"
                        >

                            <td className="p-5 text-center">

                                {user.id}

                            </td>

                            <td className="p-5 text-center">

                                {user.name}

                            </td>

                            <td className="p-5 text-center">

                                {user.email}

                            </td>

                            <td className="p-5 text-center">

                                {user.role}

                            </td>

                            <td className="p-5 text-center">

                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="
                                        bg-red-500
                                        text-white
                                        px-5
                                        py-2
                                        rounded-xl
                                        hover:bg-red-600
                                        duration-300"
                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminUsers;