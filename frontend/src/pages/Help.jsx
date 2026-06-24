function Help() {

    const faqs = [
        {
            question: "How do I apply for a job?",
            answer: "Browse available jobs, open a job listing, and click the Apply button."
        },
        {
            question: "How do I save jobs?",
            answer: "Click the Save button on a job card to add it to your Saved Jobs list."
        },
        {
            question: "How do I upload my resume?",
            answer: "You can upload your resume from your dashboard while applying for jobs."
        },
        {
            question: "How can recruiters post jobs?",
            answer: "Recruiters can log in to their dashboard and use the Create Job option."
        },
        {
            question: "Can I track my applications?",
            answer: "Yes. Visit My Applications to view all your job applications and their status."
        },
        {
            question: "Is registration free?",
            answer: "Yes. Creating an account and applying for jobs is completely free."
        }
    ];

    return (

        <div className="min-h-screen bg-[#FFF9F2] py-20 px-8">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl md:text-6xl font-bold text-center">

                    <span className="text-[#C76D4E]">
                        Help
                    </span>{" "}

                    <span className="text-[#F4B942]">
                        Center
                    </span>

                </h1>
                <div className="h-8"></div>
                <div className="flex justify-center mt-6">
                    <p className="text-gray-600 text-lg max-w-3xl text-center">
                    Frequently asked questions and support resources to help you make the most of Job Portal.
                </p>
                </div>
                {/* FAQ Section */}
                <div className="h-6"></div>
                <div className="flex justify-center mt-16">

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl px-6">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                                border border-[#FAD6C8]
                                hover:-translate-y-2
                                hover:shadow-2xl
                                duration-300"
                            >

                                <h2 className="text-2xl font-bold text-[#C76D4E]">
                                    {faq.question}
                                </h2>

                                <p className="mt-5 text-gray-600 leading-8">
                                    {faq.answer}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Support Section */}
                <div className="h-6"></div>
                <h2 className="text-4xl font-bold text-center mt-24 text-[#C76D4E]">
                    Need More Help?
                </h2>
                <div className="h-6"></div>
                <div className="flex flex-wrap justify-center gap-10 mt-12">

                    <div className="w-[300px] bg-white p-8 rounded-3xl shadow-lg border border-[#FAD6C8] text-center hover:-translate-y-2 hover:shadow-2xl duration-300">

                        <div className="text-5xl">📧</div>

                        <h3 className="text-2xl font-bold mt-4 text-[#C76D4E]">
                            Email Support
                        </h3>

                        <p className="text-gray-600 mt-4">
                            support@jobportal.com
                        </p>

                    </div>

                    <div className="w-[300px] bg-white p-8 rounded-3xl shadow-lg border border-[#FAD6C8] text-center hover:-translate-y-2 hover:shadow-2xl duration-300">

                        <div className="text-5xl">📞</div>

                        <h3 className="text-2xl font-bold mt-4 text-[#C76D4E]">
                            Phone Support
                        </h3>

                        <p className="text-gray-600 mt-4">
                            +91 9876543210
                        </p>

                    </div>

                    <div className="w-[300px] bg-white p-8 rounded-3xl shadow-lg border border-[#FAD6C8] text-center hover:-translate-y-2 hover:shadow-2xl duration-300">

                        <div className="text-5xl">💬</div>

                        <h3 className="text-2xl font-bold mt-4 text-[#C76D4E]">
                            Live Chat
                        </h3>

                        <p className="text-gray-600 mt-4">
                            Available 24 × 7
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Help;