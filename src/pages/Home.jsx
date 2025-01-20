"use client";

import { ModeToggle } from "@/components/shared/SwithcThemes";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Button>Click Me</Button>
      <ModeToggle />
    </div>
  );
};

export default Home

