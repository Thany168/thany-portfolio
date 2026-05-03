import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import rupp from "../assets/rupp.png";
import checkinme from "../assets/CheckinMe.jpg";

const experiences = [
  {
    role: "System Training",
    company: "CheckinMe",
    period: "May 2024 – Present",
    details:
      "Empower clients and business owners by delivering hands-on training on Attendance Systems, CRM, and Payroll Systems. Collaborate closely with clients to capture requirements, relay them to project management, and coordinate seamless HR solution rollouts. Conduct functional testing to enhance system performance and usability.",
    tags: ["Attendance System", "CRM", "Payroll", "HR Solutions"],
    dotDark: "bg-blue-400 shadow-blue-400/60",
    dotLight: "bg-blue-500 shadow-blue-500/40",
    tagDark: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    tagLight: "bg-blue-50 border-blue-200 text-blue-600",
    badgeDark: "bg-blue-500/10 border-blue-400/30 text-blue-400",
    badgeLight: "bg-blue-50 border-blue-200 text-blue-600",
    logoBg: "bg-blue-950/70",
    logo: <img src={checkinme} alt="" />,
  },
  {
    role: "Team Leader — Clothes Shop System",
    company: "School Assignment · Royal University of Phnom Penh",
    period: "Year 4th",
    details:
      "Led a team to design and develop a full-stack e-commerce system featuring a mobile application and admin panel.",
    tags: ["Laravel", "Flutter", "PostgreSQL", "Team Lead"],
    dotDark: "bg-violet-400 shadow-violet-400/60",
    dotLight: "bg-violet-500 shadow-violet-500/40",
    tagDark: "bg-violet-500/10 border-violet-500/30 text-violet-400",
    tagLight: "bg-violet-50 border-violet-200 text-violet-600",
    badgeDark: "bg-violet-500/10 border-violet-400/30 text-violet-400",
    badgeLight: "bg-violet-50 border-violet-200 text-violet-600",
    logoBg: "bg-violet-950/70",
    logo: <img src={rupp} alt="" />,
  },
  {
    role: "Team Leader — Tour & Travel System",
    company: "School Assignment · Royal University of Phnom Penh",
    period: "Year 3rd",
    details:
      "Led development of a tourism booking platform with booking system, user accounts, and admin dashboard.",
    tags: ["Booking System", "Admin Dashboard", "Team Lead", "Full Stack"],
    dotDark: "bg-emerald-400 shadow-emerald-400/60",
    dotLight: "bg-emerald-500 shadow-emerald-500/40",
    tagDark: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    tagLight: "bg-emerald-50 border-emerald-200 text-emerald-600",
    badgeDark: "bg-emerald-500/10 border-emerald-400/30 text-emerald-400",
    badgeLight: "bg-emerald-50 border-emerald-200 text-emerald-600",
    logoBg: "bg-emerald-950/70",
    logo: <img src={rupp} alt="" />,
  },
];

function ExperienceCard({ exp, isDarkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative mb-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`
          absolute -left-[41px] top-6 w-3.5 h-3.5 rounded-full z-10
          transition-all duration-300 shadow-lg
          ${isDarkMode ? exp.dotDark : exp.dotLight}
          ${hovered ? "scale-125" : "scale-100"}
        `}
      />

      {/* Cardd */}
      <div
        className={`
          flex gap-5 p-6 rounded-2xl border transition-all duration-300
          ${hovered ? "translate-x-1.5" : "translate-x-0"}
          ${
            isDarkMode
              ? "bg-gray-800/80 border-gray-700/50 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30"
              : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/80"
          }
        `}
      >
        {/* Logo */}
        <div
          className={`
            flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border
            ${
              isDarkMode
                ? `${exp.logoBg} border-gray-700/40`
                : "bg-gray-50 border-gray-200"
            }
          `}
        >
          {exp.logo}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Role + Badge */}
          <div className="flex items-start justify-between gap-3 flex-wrap mb-1.5">
            <h3
              className={`text-lg font-semibold leading-snug ${
                isDarkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {exp.role}
            </h3>
            <span
              className={`
                text-[11px] font-medium tracking-wide px-3 py-1 rounded-full border whitespace-nowrap
                ${isDarkMode ? exp.badgeDark : exp.badgeLight}
              `}
            >
              {exp.period}
            </span>
          </div>

          {/* Company */}
          <p
            className={`text-sm font-medium mb-3 flex items-center gap-2 ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            <span
              className={`w-3.5 h-px inline-block ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}
            />
            {exp.company}
          </p>

          {/* Details */}
          <p
            className={`text-sm leading-7 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {exp.details}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className={`
                  text-[11px] font-medium px-2.5 py-1 rounded-md border
                  ${isDarkMode ? exp.tagDark : exp.tagLight}
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Label */}
          <div
            className={`flex items-center justify-center gap-3 text-[11px] font-medium tracking-[3px] uppercase mb-4 ${
              isDarkMode ? "text-blue-400" : "text-blue-500"
            }`}
          >
            <span
              className={`w-10 h-px ${isDarkMode ? "bg-blue-400/50" : "bg-blue-400/60"}`}
            />
            Career Journey
            <span
              className={`w-10 h-px ${isDarkMode ? "bg-blue-400/50" : "bg-blue-400/60"}`}
            />
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
              Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          <div
            className={`absolute left-0 top-2 bottom-0 w-0.5 rounded-full ${
              isDarkMode ? "opacity-40" : "opacity-30"
            }`}
            style={{
              background:
                "linear-gradient(to bottom, #3b82f6, #8b5cf6, transparent)",
            }}
          />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
