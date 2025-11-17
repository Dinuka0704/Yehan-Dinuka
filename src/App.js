import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./darkmode.css";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Extracurricular from "./components/Extracurricular/Extracurricular";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Delay showing all content to allow animations to play after loading
    setTimeout(() => {
      setShowContent(true);
    }, 100); // Small delay to ensure loading screen is fully removed
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showContent && (
        <>
          <Header />
          <Hero />
          <About />
          <Education />
          <Projects />
          <Extracurricular />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
