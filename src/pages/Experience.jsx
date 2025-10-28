import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Experience() {
  const { isDarkMode } = useContext(ThemeContext);

  const experiences = [
    {
      role: "System Training",
      company: "CheckinMe",
      period: "May 2024 - Present",
      details:
        "As a System Training at CheckinMe since May 2024, I empower clients and business owners by delivering training on Attendance Systems, CRM, and Payroll Systems, while addressing their unique challenges. I collaborate closely with clients to understand their needs, communicate requirements to project management, and coordinate the seamless implementation of HR solutions. My role also involves testing new functional logic to enhance system performance and usability.",
    },
    {
      role: "Pending",
      company: "Founding",
      period: "Pending",
      details: "Pending",
    },
    {
      role: "Pending",
      company: "Founding",
      period: "Pending",
      details: "Pending",
    },
  ];

  return (
    <div
      className={`p-[100px] min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <h2
        className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Professional Experience
      </h2>
      <div
        className={`relative border-l-2 ${
          isDarkMode ? "border-gray-600" : "border-gray-300"
        } ml-4`}
      >
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            {/* Timeline dot */}
            <span
              className={`absolute -left-4 top-2 w-4 h-4 rounded-full ring-4 ring-white ${
                isDarkMode ? "bg-blue-400" : "bg-blue-500"
              }`}
            ></span>
            <div
              className={`p-6 rounded-lg shadow-lg transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200 hover:shadow-blue-500/50"
                  : "bg-white text-gray-800 hover:shadow-gray-400"
              }`}
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p
                className={`font-medium ${
                  isDarkMode ? "text-blue-300" : "text-blue-500"
                }`}
              >
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
