// ContactForm.jsx
import { motion } from "framer-motion";

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      phonenumber: form.phonenumber.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        placeholder="Enter Name"
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <input
        name="phonenumber"
        type="tel"
        placeholder="Enter Phone Number"
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Enter Email"
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <textarea
        name="message"
        placeholder="Enter Message"
        rows="4"
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      ></textarea>
      <motion.button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-300 ring hover:ring-indigo-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}
