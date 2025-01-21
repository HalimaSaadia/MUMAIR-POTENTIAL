"use client";

import Hero from "@/components/frontend/Hero/Hero";
import { ModeToggle } from "@/components/shared/SwithcThemes";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="max-content-width mx-auto">
      <Hero />

      <ModeToggle />
    </div>
  );
};

export default Home;
