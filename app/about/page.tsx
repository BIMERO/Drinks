import React from "react";
import HeroSection from "@/Components/HeroSection";
import { Label } from "@/Content/Label";
import { History } from "@/Content/History";
import { Drinks } from "@/Content/Drinks";
import { Expertise } from "@/Content/Expertise";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <HeroSection title="About Us" page="ABOUT US" />
      <Label />
      <History />
      <Drinks />
      <Expertise />
    </main>
  );
}
