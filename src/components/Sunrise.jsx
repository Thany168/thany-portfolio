// src/components/SunriseBackground.jsx
import { motion } from "framer-motion";

export default function Sunrise() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient sky */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-400 via-orange-200 to-yellow-100"
        animate={{
          background: [
            "linear-gradient(to bottom, #001f3f, #1a1a1a)", // Night
            "linear-gradient(to bottom, #ff6600, #ffcc66)", // Sunrise
            "linear-gradient(to bottom, #87CEEB, #fefcea)", // Day
            "linear-gradient(to bottom, #001f3f, #1a1a1a)", // Back to Night
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Sun */}
      <motion.div
        className="absolute left-1/2 bottom-0 w-40 h-40 bg-yellow-400 rounded-full shadow-2xl"
        style={{ x: "-50%" }}
        animate={{
          y: ["100%", "0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving clouds */}
      <motion.div
        className="absolute top-20 w-[200%] h-32 opacity-70"
        style={{
          backgroundImage: "url('https://i.ibb.co/t4jP2xv/cloud.png')", // Transparent cloud PNG
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
