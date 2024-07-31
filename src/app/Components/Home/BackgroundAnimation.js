// components/BackgroundAnimation.js
import React from 'react';
import { motion } from "framer-motion";

const dotVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        },
    },
};

const BackgroundAnimation = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="absolute inset-0 overflow-hidden z-[0]"
        >
            {[...Array(70)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={dotVariants}
                    className={`absolute rounded-full bg-gray-300 opacity-50 ${index % 2 === 0 ? 'w-2 h-2' : 'w-3 h-3'
                        } animate-pulse`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </motion.div>
    );
};

export default BackgroundAnimation;