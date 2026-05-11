import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./layouts/Footer";
import { Navbar } from "./layouts/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
// import { Testimonials } from "./sections/Testimonials";

gsap.registerPlugin(ScrollTrigger);

const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <Hero />
      <div data-reveal>
        <About />
      </div>
      <div data-reveal>
        <Skills />
      </div>
      <div data-reveal>
        <Services />
      </div>
      <div data-reveal>
        <Projects />
      </div>
      <div data-reveal>
        <Experience />
      </div>
      {/* <div data-reveal>
        <Testimonials />
      </div> */}
      <div data-reveal>
        <Contact />
      </div>
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <LoadingScreen />
      <BackgroundEffects />
      <ScrollProgress />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Suspense fallback={<div className="section-wrap min-h-screen pt-32">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
