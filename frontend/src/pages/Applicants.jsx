import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Applicants() {

    const [applicants, setApplicants] = useState([]);

    const { jobId } = useParams();

    useEffect(() => {

        fetchApplicants();

    }, []);

    const fetchApplicants = async () => {

        try {

            const response = await API.get(
                `/recruiter/jobs/${jobId}/applicants`
            );

            setApplicants(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const updateStatus = async (
        applicationId,
        status
    ) => {

        try {

            await API.put(
                `/recruiter/applications/${applicationId}/status`,
                {
                    status: status
                }
            );

            toast.success("Status Updated");

            fetchApplicants();

        }
        catch (error) {

            console.log(error);
            toast.error("Failed to Update Status");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] p-10">

            <h1 className="text-6xl font-bold text-[#C76D4E] text-center mb-14">

                Applicants

            </h1>

            <div className="grid gap-8">

                {

                    applicants.map((applicant) => (

                        <div
                            key={applicant.applicationId}
                            className="bg-white border-2 border-[#FAD6C8] p-8 rounded-3xl shadow-lg hover:shadow-2xl duration-300"
                        >

                            <h2 className="text-3xl font-bold text-[#C76D4E]">

                                {applicant.applicantName}

                            </h2>

                            <p className="mt-4 text-gray-700">

                                📧 {applicant.email}

                            </p>


                            <a
                                href={`http://localhost:8081/resume/download/${applicant.userId}`}
                                className="inline-block mt-5 bg-[#E8B7C1] text-[#4A3A33] px-6 py-3 rounded-2xl shadow-md hover:scale-105 duration-300"
                            >

                                📄 Download Resume

                            </a>


                            <div className="mt-6">

                                <span
                                    className={`px-5 py-3 rounded-full text-white font-semibold
                                    ${
                                        applicant.status === "ACCEPTED"
                                            ? "bg-green-600"
                                            : applicant.status === "REJECTED"
                                                ? "bg-red-600"
                                                : "bg-yellow-500"
                                    }`}
                                >

                                    {applicant.status}

                                </span>

                            </div>


                            <div className="flex gap-5 mt-8">

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            applicant.applicationId,
                                            "ACCEPTED"
                                        )
                                    }
                                    className="bg-[#F4B942] text-white px-6 py-3 rounded-2xl shadow-md hover:bg-[#E5A92F] duration-300"
                                >
                                    Accept
                                </button>

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            applicant.applicationId,
                                            "REJECTED"
                                        )
                                    }
                                    className="bg-[#E8B7C1] text-[#4A3A33] px-6 py-3 rounded-2xl shadow-md hover:scale-105 duration-300"
                                >
                                    Reject
                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default Applicants;