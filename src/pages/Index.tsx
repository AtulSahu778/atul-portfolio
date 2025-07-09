
import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Atul Sahu | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div id="app-root" className="min-h-screen flex flex-col">
        <header role="banner">
          <Suspense fallback={<div className="py-4 text-center">Loading navigation...</div>}>
        <Navbar />
          </Suspense>
        </header>
        <main className="flex-grow">
          <Suspense fallback={<div className="py-8 text-center">Loading hero...</div>}>
          <Hero />
          </Suspense>
          <Suspense fallback={<div className="py-8 text-center">Loading about...</div>}>
          <About />
          </Suspense>
          <Suspense fallback={<div className="py-8 text-center">Loading skills...</div>}>
          <Skills />
          </Suspense>
          <Suspense fallback={<div className="py-8 text-center">Loading projects...</div>}>
          <Projects />
          </Suspense>
          <Suspense fallback={<div className="py-8 text-center">Loading experience...</div>}>
          <Experience />
          </Suspense>
          <Suspense fallback={<div className="py-8 text-center">Loading contact...</div>}>
          <Contact />
          </Suspense>
        </main>
        <footer role="contentinfo">
          <Suspense fallback={<div className="py-4 text-center">Loading footer...</div>}>
        <Footer />
          </Suspense>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
