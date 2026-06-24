import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await emailjs.send(
                "service_hq0tpf9",
                "template_lwr72sa",
                {
                    name: form.name,
                    email: form.email,
                    message: form.message
                },
                "eEhA2mMXzzzoT2GjO"
            );

            toast.success("Message sent successfully!");

            setForm({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {

            console.log(error);

            toast.error("Failed to send message.");

        }

    };

    return (

        <div className="min-h-screen bg-[#FFF9F2] py-20 px-8">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl md:text-6xl font-bold text-center">

                    <span className="text-[#C76D4E]">
                        Contact
                    </span>{" "}

                    <span className="text-[#F4B942]">
                        Us
                    </span>

                </h1>

                <p className="text-center text-gray-600 text-lg mt-6">
                    Have questions or feedback? We'd love to hear from you.
                </p>

                <div className="mt-16 flex justify-center">

                    <div className="flex flex-wrap justify-center gap-12">

                        {/* Form Card */}

                        <div
                            className="
                            w-[700px]
                            bg-white
                            p-10
                            rounded-3xl
                            shadow-lg
                            border border-[#FAD6C8]"
                        >

                            <h2
                                className="
                                text-4xl
                                font-bold
                                text-center
                                text-[#C76D4E]
                                mb-10"
                            >

                                Send a Message

                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col items-center gap-5"
                            >

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
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
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
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

                                <textarea
                                    rows="7"
                                    name="message"
                                    placeholder="Your Message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="
                                    w-[85%]
                                    px-5
                                    py-3
                                    rounded-2xl
                                    border-2
                                    border-[#FAD6C8]
                                    focus:border-[#F4B942]
                                    outline-none
                                    resize-none
                                    duration-300"
                                />

                                <button
                                    type="submit"
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

                                    Send Message

                                </button>

                            </form>

                        </div>

                        {/* Contact Cards */}

                        <div className="flex flex-col gap-8">

                            <div
                                className="
                                w-[320px]
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                                border border-[#FAD6C8]
                                text-center"
                            >

                                <div className="text-5xl">📧</div>

                                <h3
                                    className="
                                    text-3xl
                                    font-bold
                                    text-[#C76D4E]
                                    mt-4"
                                >

                                    Email

                                </h3>

                                <p className="mt-4 text-gray-600">
                                    support@jobportal.com
                                </p>

                            </div>

                            <div
                                className="
                                w-[320px]
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                                border border-[#FAD6C8]
                                text-center"
                            >

                                <div className="text-5xl">📞</div>

                                <h3
                                    className="
                                    text-3xl
                                    font-bold
                                    text-[#C76D4E]
                                    mt-4"
                                >

                                    Phone

                                </h3>

                                <p className="mt-4 text-gray-600">
                                    +91 9876543210
                                </p>

                            </div>

                            <div
                                className="
                                w-[320px]
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                                border border-[#FAD6C8]
                                text-center"
                            >

                                <div className="text-5xl">📍</div>

                                <h3
                                    className="
                                    text-3xl
                                    font-bold
                                    text-[#C76D4E]
                                    mt-4"
                                >

                                    Address

                                </h3>

                                <p className="mt-4 text-gray-600">
                                    Hyderabad, Telangana, India
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Contact;