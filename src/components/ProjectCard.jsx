import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, img, link }) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={img} alt={title} className="w-full h-contain object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        <motion.a
          href={link}
          className="text-indigo-600 hover:underline font-medium"
          whileHover={{ x: 4 }}
          target="_blank"
        >
          View Project →
        </motion.a>
      </div>
    </motion.div>
  );
}
