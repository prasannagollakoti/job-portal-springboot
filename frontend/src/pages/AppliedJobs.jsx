import { useEffect, useState } from "react";
import API from "../services/api";

function AppliedJobs() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {

        try {

            const response = await API.get("/applications/my");
            setApplications(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] px-8 py-12">

            <h1 className="text-6xl font-bold text-center text-[#C76D4E] mb-16">

                My Applications

            </h1>
            <div className="h-8"></div>
            {

                applications.length === 0 ? (

                    <div className="text-center text-2xl text-gray-500">

                        No Applications Found

                    </div>

                ) : (

                    <div className="flex justify-center">

                        <div className="grid md:grid-cols-3 gap-10">

                            {

                                applications.map((app) => (

                                    <div
                                        key={app.id}
                                        className="
                                        bg-white
                                        border border-[#FAD6C8]
                                        rounded-3xl
                                        shadow-lg
                                        hover:shadow-2xl
                                        hover:-translate-y-2
                                        duration-300
                                        justify-items-center
                                        w-[350px]
                                        p-8"
                                    >

                                        <h2 className="text-3xl font-bold text-[#C76D4E] mb-6">

                                            {app.jobTitle}

                                        </h2>

                                        <p className="text-lg text-gray-700 mb-4">

                                            🏢 Company : {app.company}

                                        </p>

                                        <p className="text-lg mb-4">

                                            Status :

                                            <span className="ml-2 font-bold text-green-600">

                                                {app.status}

                                            </span>

                                        </p>

                                        <p className="text-gray-500">

                                            📅 Applied At :
                                            <br />
                                            {app.appliedAt}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default AppliedJobs;