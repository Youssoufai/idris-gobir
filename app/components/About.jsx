"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/banner.jpg",
    "/images/slide2.jpg",
    "/images/slide4.jpg",
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-11 bg-gray-100 overflow-hidden">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-black">
                    About <span className="text-green-600">Muhammad Idris</span>
                </h1>
            </div>

            {/* Slideshow Section */}
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg h-[400px]">
                {images.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img}
                        alt={`Slide ${i + 1}`}
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                        initial={false}
                        animate={{ opacity: i === currentIndex ? 1 : 0 }}
                        transition={{ duration: 0.8 }}
                    />
                ))}

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-20"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        )
                    }
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-20"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === images.length - 1 ? 0 : prevIndex + 1
                        )
                    }
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* About Text */}
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-6">
                <p className="mb-4">
                    Idris Muhammad Gobir, was Born in Sabon Birni town in the year 1975,
                    47 year old Honorable Idris Dan chadi, an Alumnus of the prestigious
                    Ahmadu Bello University Zaria, is a holder of a chain of degrees. He
                    has in his kitty, five Masters Degree in various disciplines of human
                    management and development, including Computer Software management, as
                    well as International affairs and diplomacy.{" "}
                    <span className="font-semibold text-black">
                        He is currently pursuing his Doctorate at the Nigerian Defense
                        Academy NDA.
                    </span>
                </p>

                <p>
                    Politically, Honorable Idris Muhammad Gobir is one of the vibrant political activists in Sokoto State, as his voice is, and remains one of the most prominent, in furthering and defending the interest of the people of Sokoto State, especially in the fight against insecurity in the Eastern part of our State State.{" "}
                    Honorable Idris Muhammad Gobir is married with children.
                </p>
            </div>
        </section>
    );
}
