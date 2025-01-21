"use client";

import AboutMe from "@/components/frontend/AboutMe/AboutMe";
import Hero from "@/components/frontend/Hero/Hero";
import { ModeToggle } from "@/components/shared/SwithcThemes";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="max-content-width mx-auto">
      <Hero />
      <AboutMe />

      <ModeToggle />
    </div>
  );
};

export default Home;
