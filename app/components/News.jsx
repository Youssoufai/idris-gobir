"use client";
import React from "react";
import { motion } from "framer-motion";

const newsData = [
    {
        id: 1,
        title: "Security",
        date: "July 4, 2025",
        description: "I have attended the meeting about security that took place at the office of the presidential advisor on security department in Abuja. The meeting was attended by representatives of 21 states in Nigeria, where we had a lot of discussions regarding security issues, may God grant us peace.HAPPY JUMMU'AH",
        image: "/images/security.jpg",
    },
    {
        id: 2,
        title: "Technology",
        date: "Jun 1, 2025",
        description: "Today, I am proud to lead Sokoto State representatives here in Tokyo captial to attend the 2nd International Conference of Artificial Intelligence",
        image: "/images/tech.jpg",
    },
    {
        id: 3,
        title: "Eid Visitation",
        date: "Apr 1, 2025",
        description: "By the grace of God I got to visit my motherland wihich is in new city, I got a nice welcoming together with congratulating each other happy sallah.",
        image: "/images/eid.jpg",
    },
];

const NewsCard = ({ news }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
            whileHover={{ scale: 1.05 }}
        >
            <img src={news.image} alt={news.title} className="w-full h-52 object-cover" />
            <div className="p-5">
                <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">News</span>
                <p className="text-gray-600 text-sm mt-2">{news.date}</p>
                <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{news.description}</p>
            </div>
        </motion.div>
    );
};

export default function NewsSection() {
    return (
        <section className="py-10 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Latest News</h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {newsData.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
