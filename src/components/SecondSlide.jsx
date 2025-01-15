import Header from "../components/Header";
import Button from "../components/Button";
import Input from "./Input";
import BackButton from "./BackButton";
import { useState } from "react";
export default function SecondSlide({
  setCurrentSlides,
  backCurrentSlides,
  currentSlide,
}) {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  // const handleClick = () => {
  //   const { email, phoneNumber, password, confirmPassword } = formValues;
  //   if (!email.trim()) {
  //     setFormErrors((prev) => ({ ...prev, email: "Мэйл хаягаа оруулна уу" }));
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     setFormErrors((prev) => ({ ...prev, email: "Зөв мэйл хаяг оруулна уу" }));
  //   }
  // };
  // if (!phoneNumber.trim()) {
  //   setFormErrors((prev) => ({ ...prev, phoneNumber: "Тоо оруулна уу" }));
  // } else if (!/^\+?\d{8}$/.test(phoneNumber)) {
  //   setFormErrors((prev) => ({
  //     ...prev,
  //     phoneNumber: "8 оронтой тоо оруулна уу",
  //   }));
  // }

  return (
    <div className="w-[480px] h-[655px] p-8 rounded-lg border-1 bg-[#FFFFFF] flex flex-col justify-between m-auto gap-[8px]">
      <div>
        <Header />
        <div className="gap-[12px] mt-[28px]">
          <Input
            label="Email"
            placeholder="Your email"
            error={""}
            helperText="First name cannot contain special characters or numbers."
            type="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            label="Phone number"
            placeholder="Your phone number"
            error={""}
            helperTextText="Last name cannot contain special characters or numbers."
            type="number"
            name="phoneNumber"
            onChange={handleChange}
          />
          <Input
            label="Password"
            placeholder="Your password"
            error={""}
            helperText="This username is already taken. Please choose another one."
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Input
            label="Confirm password"
            placeholder="Your confirm password"
            error={""}
            helperText="This username is already taken. Please choose another one."
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <BackButton backCurrentSlides={backCurrentSlides} />
        <Button
          buttonText={currentSlide}
          ChevronRight
          // setCurrentSlide={handleClick}
        />
      </div>
    </div>
  );
}
