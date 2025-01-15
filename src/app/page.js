"use client";
import { useActionState, useState } from "react";
import FirstSlide from "@/components/Firstslide";
import SecondSlide from "@/components/SecondSlide";
import ThirdSlide from "@/components/ThirdSlide";
import Success from "@/components/Success";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formVlue, setFormVlue] = useState[{ name: "" }];
  const FormSteps = [FirstSlide, SecondSlide, ThirdSlide, Success][
    currentSlide
  ];

  const setCurrentSlides = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const backCurrentSlides = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    console.log(event.target.name);
    setFormVlue;
  };
  return (
    <div className="pt-[182px] bg-[#c2c3c8]">
      <FormSteps
        setCurrentSlides={setCurrentSlides}
        handleChange={handleChange}
        backCurrentSlides={backCurrentSlides}
        currentSlide={currentSlide}
      />
    </div>
  );
}
