import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-white dark:bg-federal-blue">
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
