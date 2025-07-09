"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 }); // Animates when 30% is in view

    return (
        <>
            <section
                ref={ref}
                className="relative h-screen bg-[url('/text.jpg')] bg-center bg-cover overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>

                {/* Content */}
                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-lg sm:text-2xl font-light uppercase tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Welcome to the official website of
                    </motion.h2>

                    <motion.h1
                        className="text-4xl sm:text-6xl font-extrabold mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Muhammad <span className="text-green-500">Kadade</span> Suleiman
                    </motion.h1>

                    <motion.p
                        className="mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        National Youth Leader of The PDP <span className="font-bold">(MON)</span>
                    </motion.p>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;
