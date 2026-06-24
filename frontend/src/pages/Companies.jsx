import { useState } from "react";

import googleLogo from "../assets/logos/google.svg";
import microsoftLogo from "../assets/logos/microsoft.svg";
import amazonLogo from "../assets/logos/amazon.svg";
import netflixLogo from "../assets/logos/netflix.svg";
import infosysLogo from "../assets/logos/infosys.svg";
import tcsLogo from "../assets/logos/tcs.svg";
import accentureLogo from "../assets/logos/accenture.svg";
import wiproLogo from "../assets/logos/wipro.svg";

function Companies() {

    const [search, setSearch] = useState("");

    const companies = [
        {
            name: "Google",
            logo: googleLogo,
            jobs: 45,
            description: "Innovating the future with AI, cloud, and search technologies."
        },
        {
            name: "Microsoft",
            logo: microsoftLogo,
            jobs: 38,
            description: "Empowering people and organizations worldwide."
        },
        {
            name: "Amazon",
            logo: amazonLogo,
            jobs: 52,
            description: "Building customer-centric solutions at scale."
        },
        {
            name: "Netflix",
            logo: netflixLogo,
            jobs: 20,
            description: "Entertainment and streaming innovation."
        },
        {
            name: "Infosys",
            logo: infosysLogo,
            jobs: 64,
            description: "Global leader in consulting and digital services."
        },
        {
            name: "TCS",
            logo: tcsLogo,
            jobs: 71,
            description: "Driving transformation through technology."
        },
        {
            name: "Accenture",
            logo: accentureLogo,
            jobs: 56,
            description: "Helping businesses transform digitally."
        },
        {
            name: "Wipro",
            logo: wiproLogo,
            jobs: 34,
            description: "Leading innovation in IT and consulting."
        }
    ];

    const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#FFF9F2] px-6 py-16">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="text-[#C76D4E]">
                        Top Hiring
                    </span>{" "}
                    <span className="text-[#F4B942]">
                        Companies
                    </span>
                </h1>
                <div className="h-6"></div>
                <div className="flex justify-center mt-6">
                    <p className="text-gray-600 text-lg max-w-3xl text-center">
                        Explore opportunities from leading companies around the world.
                    </p>
                </div>
                <div className="h-6"></div>
                <div className="flex justify-center mt-8">
                    <input
                        type="text"
                        placeholder="Search company..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                        w-full
                        max-w-xl
                        p-4
                        rounded-2xl
                        border
                        border-[#FAD6C8]
                        bg-white
                        outline-none
                        focus:ring-2
                        focus:ring-[#F4B942]"
                    />
                </div>
                <div className="h-6"></div>
                <div className="mt-14 flex flex-wrap justify-center gap-10">

                    {filteredCompanies.map((company, index) => (

                        <div
                            key={index}
                            className="
                            w-full
                            max-w-[320px]
                            bg-white
                            p-8
                            rounded-3xl
                            shadow-lg
                            border border-[#FAD6C8]
                            hover:-translate-y-2
                            hover:shadow-2xl
                            duration-300"
                        >

                            <div className="flex justify-center mb-5">

                                <div className="
                                h-20
                                w-20
                                rounded-full
                                bg-[#FFF9F2]
                                shadow-md
                                flex
                                items-center
                                justify-center">

                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-12 w-12 object-contain"
                                    />

                                </div>

                            </div>

                            <h2 className="text-3xl font-bold text-[#C76D4E] text-center">
                                {company.name}
                            </h2>

                            <p className="
                            text-gray-600
                            text-center
                            mt-5
                            leading-8
                            min-h-[90px]
                            flex
                            items-center
                            justify-center">
                                {company.description}
                            </p>

                            <div className="flex justify-center mt-6">

                                <span className="
                                bg-[#F4B942]
                                text-white
                                px-6
                                py-2
                                rounded-full
                                font-semibold">
                                    {company.jobs} Jobs Available
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Companies;