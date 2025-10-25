import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white pt-24 px-6 md:px-16">
      {/* Profile Image */}
      <motion.div
        className="mb-8"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src="https://z-p3-scontent.fpnh18-6.fna.fbcdn.net/v/t39.30808-6/473081899_1247851049640486_4162408148206797773_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFtU_JH8rVGKJ9oSZzw_7GN_KaBWZEwyBL8poFZkTDIEuZtTXZhqLq3uthzx7D_815twrO0r3YlfcCo9rWZpGRO&_nc_ohc=YXhuTNrOg7gQ7kNvgHvmPYX&_nc_oc=Adle0SqyHQsQBDgO5KTznvClCoBwd5UO7Vo8NG5iFLhODHAtDvsJz5yr4VPXs7WKd8w&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-6.fna&_nc_gid=hul2eWuJHH3wYZyI0scnGw&oh=00_AfcBH8ROifGWInhUhkC1vOqHah7IxJ1amyYb8MY88bYsOA&oe=6902DE8B"
          alt="Thany Profile"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-2 border-indigo-500 dark:border-indigo-400"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="text-center max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          About Me
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          I’m Thany, a passionate Year 4 Computer Science student at the Royal
          University of Phnom Penh, Cambodia. With expertise in{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            React, Tailwind CSS, Vite, JavaScript, and C/C++
          </span>
          , I specialize in crafting responsive, user-focused web applications
          that combine modern design with seamless functionality. My experience
          in HR technology has honed my ability to deliver innovative solutions
          that drive operational excellence. I’m driven by a love for
          problem-solving and a commitment to creating clean, professional, and
          visually appealing digital experiences.
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          When I’m not coding, you can find me exploring new tech trends,
          contributing to open-source projects, or mentoring aspiring
          developers. Let’s connect to build something extraordinary!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-transform duration-300 transform hover:scale-105"
            aria-label="View Thany's projects"
          >
            Explore My Projects
          </Link>
          <a
            href="#" // Replace with your actual resume link
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105"
            aria-label="Download Thany's resume"
          >
            <FaFileDownload className="mr-2" /> Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourusername" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Visit Thany's GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Visit Thany's LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
