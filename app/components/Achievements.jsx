"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Briefcase, Globe, Target } from "lucide-react";

export default function Achievements() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

    return (
        <motion.section
            ref={sectionRef}
            className="py-16 px-6 bg-white overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-green-600 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <span className="text-black">Achievements &</span> Impact
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: false }}
                >
                    Over the years, Muhammad Idris Gobir has made remarkable contributions to youth empowerment, leadership, and political inclusion in Nigeria.
                </motion.p>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, title: "Spearheaded Rural Education Reform", text: "Led the initiative to renovate rural schools and improve teacher deployment across Sokoto State, enhancing access to quality education for underserved communities." },
                        { icon: Users, title: "Youth Empowerment Initiatives", text: "Launched multiple programs that have empowered thousands of young Nigerians in leadership, business, and governance." },
                        { icon: Briefcase, title: "Policy Advocacy & Change", text: "Successfully advocated for policies that create more opportunities for youth in politics and economic development." }
                    ].map((item, index) => (
                        // 
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-2xl shadow-lg text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <item.icon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                            <h3 className="text-2xl font-semibold text-green-600 mb-3">{item.title}</h3>
                            <p className="text-gray-700">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-green-600 mb-6">Impact in Numbers</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, number: "50K+", label: "Youths Empowered" },
                            { icon: Briefcase, number: "100+", label: "Leadership Programs" },
                            { icon: Globe, number: "200+", label: "Communities Reached" },
                            { icon: Target, number: "10+", label: "Years of Advocacy" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-green-600 text-white p-6 rounded-2xl shadow-lg text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: false }}
                            >
                                <item.icon className="w-12 h-12 mx-auto mb-3" />
                                <h4 className="text-4xl font-bold">{item.number}</h4>
                                <p className="text-lg">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
