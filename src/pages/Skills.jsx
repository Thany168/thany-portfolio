import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaAndroid,
  FaBootstrap,
} from "react-icons/fa";
import { SiPostman, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  const frontEndSkills = [
    {
      name: "HTML",
      proficiency: 99,
      icon: <FaHtml5 size={32} className="text-orange-500" />,
    },
    {
      name: "CSS",
      proficiency: 90,
      icon: <FaCss3Alt size={32} className="text-blue-500" />,
    },
    {
      name: "Bootstrap",
      proficiency: 90,
      icon: <FaBootstrap size={32} className="text-blue-500" />,
    },
    {
      name: "TailwindCSS",
      proficiency: 90,
      icon: <FaCode size={32} className="text-teal-500" />,
    },
    {
      name: "JavaScript",
      proficiency: 90,
      icon: <FaJs size={32} className="text-yellow-500" />,
    },
    {
      name: "TypeScript",
      proficiency: 70,
      icon: <SiTypescript size={32} className="text-cyan-500" />,
    },
    {
      name: "React",
      proficiency: 90,
      icon: <FaReact size={32} className="text-cyan-500" />,
    },
    {
      name: "Next JS",
      proficiency: 70,
      icon: <RiNextjsFill size={32} className="text-cyan-500" />,
    },
  ];

  const backEndSkills = [
    {
      name: "PHP",
      proficiency: 80,
      icon: <FaPhp size={32} className="text-purple-600" />,
    },
    {
      name: "Laravel",
      proficiency: 75,
      icon: <FaLaravel size={32} className="text-red-600" />,
    },
  ];

  const tools = [
    {
      name: "Git",
      proficiency: 80,
      icon: <FaGitAlt size={40} className="text-orange-600" />,
    },
    {
      name: "GitHub",
      proficiency: 90,
      icon: <FaGithub size={40} className="text-black dark:text-white" />,
    },
    {
      name: "Postman",
      proficiency: 80,
      icon: <SiPostman size={40} className="text-orange-500" />,
    },
    {
      name: "VS Code",
      proficiency: 99,
      icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
      name: "Android Studio",
      proficiency: 99,
      icon: <FaAndroid size={40} className="text-blue-600" />,
    },
  ];

  const softSkills = [
    { name: "Time Management" },
    { name: "Problem Solving" },
    { name: "Team Collaboration" },
    { name: "Communication" },
    { name: "Flexibility" },
    { name: "Adaptability" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center gap-2 w-28 flex-shrink-0"
      variants={skillVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-600">
        {skill.icon}
      </div>
      <span className="text-sm font-semibold text-center leading-tight">
        {skill.name}
      </span>
      <div className="w-full bg-gray-200 dark:bg-gray-500 rounded-full h-1.5">
        <div
          className="bg-indigo-600 dark:bg-indigo-400 h-1.5 rounded-full"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-300">
        {skill.proficiency}%
      </span>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white pt-24 px-6 md:px-16 py-20">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          My Skills
        </h2>

        <div className="flex flex-col gap-10 mb-12">
          {/* Front End Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/60 dark:bg-gray-700/40 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Front End
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 md:grid-cols-5  justify-items-center">
              {frontEndSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Back End Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/60 dark:bg-gray-700/40 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Back End
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center ">
              {backEndSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-full sm:w-64 flex items-center gap-3"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
              >
                {tool.icon}
                <span className="text-lg font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-full sm:w-64"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="text-lg font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
