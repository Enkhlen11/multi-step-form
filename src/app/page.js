"use client";
import { useState } from "react";
import FirstSlide from "@/components/Firstslide";
import SecondSlide from "@/components/SecondSlide";
import ThirdSlide from "@/components/ThirdSlide";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const FormSteps = [FirstSlide, SecondSlide, ThirdSlide][currentSlide];
  const setCurrentSlides = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const handleChange = (event) => {
    // console.log(event.target.value);
    console.log(event.target.name);
  };
  return (
    <div className="pt-[182px] bg-[#c2c3c8]">
      <FormSteps
        setCurrentSlides={setCurrentSlides}
        currentSlide={currentSlide}
        handleChange={handleChange}
      />
    </div>
  );
}
