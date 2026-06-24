import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";

import UserDashboard from "../pages/UserDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import AdminDashboard from "../pages/AdminDashboard";

import AppliedJobs from "../pages/AppliedJobs";
import SavedJobs from "../pages/SavedJobs";

import RecruiterJobs from "../pages/RecruiterJobs";
import Applicants from "../pages/Applicants";
import CreateJob from "../pages/CreateJob";
import EditJob from "../pages/EditJob";

import ManageUsers from "../pages/ManageUsers";
import ManageJobs from "../pages/ManageJobs";

import ProtectedRoute from "../components/ProtectedRoute";
import Companies from "../pages/Companies";
import Help from "../pages/Help";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

function AppRoutes() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/jobs"
                element={<Jobs />}
            />


            {/* USER Routes */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["USER"]}>
                        <UserDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/applications"
                element={
                    <ProtectedRoute allowedRoles={["USER"]}>
                        <AppliedJobs />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/saved-jobs"
                element={
                    <ProtectedRoute allowedRoles={["USER"]}>
                        <SavedJobs />
                    </ProtectedRoute>
                }
            />


            {/* RECRUITER Routes */}

            <Route
                path="/recruiter-dashboard"
                element={
                    <ProtectedRoute allowedRoles={["RECRUITER"]}>
                        <RecruiterDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/recruiter/jobs"
                element={
                    <ProtectedRoute allowedRoles={["RECRUITER"]}>
                        <RecruiterJobs />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/create-job"
                element={
                    <ProtectedRoute allowedRoles={["RECRUITER"]}>
                        <CreateJob />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/edit-job/:id"
                element={
                    <ProtectedRoute allowedRoles={["RECRUITER"]}>
                        <EditJob />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/applicants/:jobId"
                element={
                    <ProtectedRoute allowedRoles={["RECRUITER"]}>
                        <Applicants />
                    </ProtectedRoute>
                }
            />


            {/* ADMIN Routes */}

            <Route
                path="/admin-dashboard"
                element={
                    <ProtectedRoute allowedRoles={["ADMIN"]}>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/users"
                element={
                    <ProtectedRoute allowedRoles={["ADMIN"]}>
                        <ManageUsers />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/jobs"
                element={
                    <ProtectedRoute allowedRoles={["ADMIN"]}>
                        <ManageJobs />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/companies"
                element={<Companies />}
            />
            <Route
                path="/help"
                element={<Help />}
            />
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route path="/profile" element={<Profile />} />

        </Routes>

    );

}

export default AppRoutes;