import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import { ThemeProvider } from "../context/ThemeContext"; // Import ThemeProvider
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Notfound from "../pages/Notfound";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/education"
          element={
            <PageWrapper>
              <Education />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/skills"
          element={
            <PageWrapper>
              <Skills />
            </PageWrapper>
          }
        />
        <Route
          path="/experience"
          element={
            <PageWrapper>
              <Experience />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/*"
          element={
            <PageWrapper>
              <Notfound />
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default function AppRouter() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
