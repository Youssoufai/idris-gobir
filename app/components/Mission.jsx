"use client";
import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <section className="py-16 px-6 bg-gray-200 h-full overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }} // Ensures animation happens every time it's in view
                >
                    <img
                        src="/images/slide2.jpg"
                        alt="Vision and Mission"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
                        <span className="text-black">The </span>Mission
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        To build a Sokoto State—and by extension, a Nigeria—where young people are at the heart of leadership, innovation, and sustainable development. We envision a future where every youth is empowered, heard, and given the tools to transform their communities and contribute to the progress of our state and nation.
                    </p>

                    {/* Animated List */}
                    <motion.ul
                        className="list-disc pl-6 space-y-2 text-gray-700"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                        }}
                    >
                        {[
                            "Empowering Sokoto’s youth through grassroots political participation, leadership training, and civic education.",
                            "Building a connected network of emerging young leaders across Sokoto State, committed to excellence, unity, and service",
                            "Driving youth-centered policy advocacy to expand access to job creation, skills acquisition, and digital innovation in both rural and urban areas.",
                            "Championing transparency and accountability in government, ensuring young people are not just beneficiaries but active architects of governance."
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
