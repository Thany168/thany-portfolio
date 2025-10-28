import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const frontEndSkills = [
    {
      name: "HTML",
      proficiency: 100,
      icon: <FaHtml5 size={40} className="text-orange-500" />,
    },
    {
      name: "CSS",
      proficiency: 85,
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      proficiency: 90,
      icon: <FaJs size={40} className="text-yellow-500" />,
    },
    {
      name: "React",
      proficiency: 85,
      icon: <FaReact size={40} className="text-cyan-500" />,
    },
    {
      name: "TailwindCSS",
      proficiency: 80,
      icon: <SiTailwindcss size={40} className="text-teal-500" />,
    },
  ];

  const backEndSkills = [
    {
      name: "PHP",
      proficiency: 65,
      icon: <FaPhp size={40} className="text-green-600" />,
    },
    {
      name: "Laravel",
      proficiency: `Learning ? Pending `,
      icon: <FaLaravel size={40} className="text-green-600" />,
    },
  ];

  const softSkills = [
    { name: "Time Management" },
    { name: "Problem Solving" },
    { name: "Team Collaboration" },
    { name: "Communication" },
    { name: "Flexibility" },
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

        {/* Technical Skills: Front End and Back End */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Front End Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Front End
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {frontEndSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-full sm:w-64"
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {skill.proficiency}% Proficiency
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back End Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
              Back End
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {backEndSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-full sm:w-64"
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {skill.proficiency}% Proficiency
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
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
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                    // style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                {/* <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {skill.proficiency}% Proficiency
                </p> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
