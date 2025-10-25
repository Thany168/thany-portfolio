import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-4 max-w-lg mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Your Name"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        placeholder="Your Message"
        rows="4"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <motion.button
        type="submit"
        className="bg-indigo-600 text-white py-3 rounded-lg font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}
