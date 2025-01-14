"use client";
import { useState } from "react";
import FirstSlide from "@/components/Firstslide";
import SecondSlide from "@/components/SecondSlide";
import ThirdSlide from "@/components/ThirdSlide";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const FormSteps = [FirstSlide, SecondSlide, ThirdSlide][currentSlide];
  return (
    <div className="pt-[182px]">
      <FormSteps
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        formSteps={FormSteps}
      />
    </div>
  );
}
