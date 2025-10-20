"use client";
import { useState } from "react";
import FirstSlide from "@/components/FirstSlide";
import SecondSlide from "@/components/SecondSlide";
import ThirdSlide from "@/components/ThirdSlide";
import Success from "@/components/Success";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const FormSteps = [FirstSlide, SecondSlide, ThirdSlide, Success][
    currentSlide
  ];

  const setCurrentSlides = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const backCurrentSlides = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="min-h-screen pt-[182px] bg-[#e0e1e2]">
      <FormSteps
        setCurrentSlides={setCurrentSlides}
        currentSlide={currentSlide}
        backCurrentSlides={backCurrentSlides}
      />
    </div>
  );
}
