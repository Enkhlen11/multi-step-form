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
  const handleClick = () => {
    const { email, phoneNumber, password, confirmPassword } = formValues;
    if (!email.trim()) {
      setFormErrors((prev) => ({ ...prev, email: "Мэйл хаягаа оруулна уу" }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormErrors((prev) => ({ ...prev, email: "Зөв мэйл хаяг оруулна уу" }));
    }
    if (!phoneNumber.trim()) {
    setFormErrors((prev) => ({ ...prev, phoneNumber: "Тоо оруулна уу" }));
  } else if (!/^\+?\d{8}$/.test(phoneNumber)) {
    setFormErrors((prev) => ({
      ...prev,
      phoneNumber: "8 оронтой тоо оруулна уу",
    }));
  }
  if (!password.trim()){ errors.password = "Нууц үгээ оруулна уу";
  } else if (password.length < 6) {
    errors.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой";}

  if (confirmPassword !== password) {
    errors.confirmPassword = "Нууц үг таарахгүй байна";
  }
   if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  };
   
    return (
      <div className="w-[480px] h-[655px] p-8 rounded-lg border-1 bg-[#FFFFFF] flex flex-col justify-between m-auto gap-[8px]">
        <div>
          <Header />
          <div className="gap-[12px] mt-[28px]">
            <Input
              label="Email"
              placeholder="Your email"
              error={formValues.email}
              helperText="First name cannot contain special characters or numbers."
              type="email"
              name="email"
              handleChange={handleChange}
            />
            <Input
              label="Phone number"
              placeholder="Your phone number"
              error={""}
              helperTextText="Last name cannot contain special characters or numbers."
              type="number"
              name="phoneNumber"
              handleChange={handleChange}
            />
            <Input
              label="Password"
              placeholder="Your password"
              error={""}
              helperText="This username is already taken. Please choose another one."
              type="password"
              name="password"
              handleChange={handleChange}
            />
            <Input
              label="Confirm password"
              placeholder="Your confirm password"
              error={""}
              helperText="This username is already taken. Please choose another one."
              type="password"
              name="confirmPassword"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <BackButton backCurrentSlides={backCurrentSlides} />
          <Button
            buttonText={currentSlide}
            ChevronRight
            setCurrentSlide={handleClick}
          />
        </div>
      </div>
    );
}
