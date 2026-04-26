import { motion } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa6";

export default function ProjectCard({
  title,
  desc,
  img,
  link,
  github,
  tags = [],
}) {
  return (
    <motion.div className="bg-[#141420] rounded-2xl overflow-hidden border border-white/10 flex flex-col hover:scale-105 transition duration-500">
      {/* Image */}
      <motion.div className="w-full h-[100%] overflow-hidden bg-[#0d0d1a] ">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Body */}
      <motion.div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-sora text-sm font-bold text-white">{title}</h3>

        <p className="text-xs text-white/50 leading-relaxed flex-1">{desc}</p>

        <motion.div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium bg-white/10 text-white/60 rounded-full px-2.5 py-0.5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Actions */}
      <motion.div className="flex gap-2 px-4 pb-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white text-xs font-semibold"
          >
            <FaLink /> Live
          </a>
        ) : (
          <span className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-lg bg-indigo-600/30 text-white/30 text-xs font-semibold cursor-not-allowed">
            <FaLink /> Live
          </span>
        )}

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition text-white/80 border border-white/10 text-xs font-semibold"
          >
            <FaGithub /> Code
          </a>
        ) : (
          <span className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-lg bg-white/5 text-white/30 border border-white/10 text-xs font-semibold cursor-not-allowed">
            <FaGithub /> Code
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
