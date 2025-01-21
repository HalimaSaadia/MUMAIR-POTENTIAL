"use client";

import AboutMe from "@/components/frontend/AboutMe/AboutMe";
import Hero from "@/components/frontend/Hero/Hero";
import ProjectsSection from "@/components/frontend/Projects/ProjectsSection";
import ServiceSection from "@/components/frontend/services/ServiceSection";
import { ModeToggle } from "@/components/shared/SwithcThemes";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="max-content-width mx-auto">
      <Hero />
      <AboutMe />
      <ServiceSection />
      <ProjectsSection />

     <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10 z-50 ">
     <ModeToggle />
     </div>
    </div>
  );
};

export default Home;
