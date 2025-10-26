import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";

export default function Education() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const educationData = [
    {
      icon: <FaUniversity />,
      title: "Royal University of Phnom Penh (RUPP)",
      level: "Bachelor of Computer Science",
      year: "2023 - Present",
      desc: "Currently pursuing a Bachelor's degree in Computer Science at RUPP. Building strong foundations in programming, data structures, algorithms, and web development using React, Tailwind CSS, JavaScript and PHP Laravel.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Chambak High School",
      level: "High School Diploma (Bac II)",
      year: "2020 - 2022",
      desc: "Graduated with focus on science stream. Developed analytical thinking and teamwork through STEM projects and extracurricular technology activities.",
    },
    {
      icon: <FaBookOpen />,
      title: "BoeungRy Secondary School, Kratie",
      level: "General Education",
      year: "2017 - 2019",
      desc: "---",
    },
    {
      icon: <FaBookOpen />,
      title: "Primary School, Phnom Penh",
      level: "Primary Education",
      year: "2011 - 2016",
      desc: "---",
    },
  ];

  const shortCourses = [
    {
      icon: <FaCertificate />,
      title: "Front-End Web Development",
      provider: "ETEC CENTER",
      year: "2023",
      desc: "Learned to build responsive and interactive websites using HTML, CSS, JavaScript, and Tailwind CSS. Applied modern UI/UX practices to design clean web interfaces.",
    },
    {
      icon: <FaCertificate />,
      title: "React.js",
      provider: "Self Learning",
      year: "2024",
      desc: "Mastered React fundamentals including hooks, components, and state management. Integrated Tailwind and Vite to create fast, modern web apps.",
    },
    {
      icon: <FaCertificate />,
      title: "Cloud Computing Fundamentals",
      provider: "None Provider",
      year: "Pending",
      desc: "Gained hands-on experience with AWS services such as EC2, S3, and Lambda. Learned deployment and scaling of web applications on the cloud.",
    },
  ];
  const languages = [
    {
      name: "Khmer",
      flag: "../public/cambodiaflag.jpg",
      skills: [
        { label: "Speaking", level: 100 },
        { label: "Reading", level: 100 },
        { label: "Writing", level: 100 },
        { label: "Listening", level: 100 },
      ],
    },
    {
      name: "English",
      flag: "../public/englishflag.jpg",
      skills: [
        { label: "Speaking", level: 90 },
        { label: "Reading", level: 98 },
        { label: "Writing", level: 98 },
        { label: "Listening", level: 90 },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6 md:px-16">
      {/* ===== PAGE TITLE ===== */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        <span className="bg-indigo-500 text-gray-900 px-4 py-2 rounded-md shadow-md">
          Education
        </span>
      </motion.h1>

      {/* ===== FORMAL EDUCATION ===== */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-indigo-500 pl-3">
          Formal Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400"
            >
              <div className="text-indigo-500 text-3xl mb-3">{edu.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {edu.level} • {edu.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== SHORT COURSES ===== */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-indigo-500 pl-3">
          Short Courses & Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shortCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-400"
            >
              <div className="text-indigo-500 text-3xl mb-3">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {course.provider} • {course.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {course.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Languagee */}
      <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6 md:px-16">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          <span className="bg-indigo-500 text-gray-900 px-4 py-2 rounded-md shadow-md">
            Language Skills
          </span>
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-4 border-yellow-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-500 text-3xl" />
                {/* <img src={"../assets/cambodiaflag.png"} alt="" /> */}
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-8 h-8 object-cover rounded-sm "
                />
                <h3 className="text-2xl font-bold">{lang.name}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {lang.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.label}</span>
                      <span className="text-indigo-500 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="bg-indigo-500 h-3 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
