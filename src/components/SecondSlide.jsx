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
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { email, phoneNumber, password, confirmPassword } = formValues;
    let errors = {};

    if (!email.trim()) {
      errors.email = "Мэйл хаягаа оруулна уу";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Зөв мэйл хаяг оруулна уу";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Утасны дугаараа оруулна уу";
    } else if (!/^\d{8}$/.test(phoneNumber)) {
      errors.phoneNumber = "8 оронтой утасны дугаар оруулна уу";
    }

    if (!password.trim()) {
      errors.password = "Нууц үгээ оруулна уу";
    } else if (password.length < 6) {
      errors.password = "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой";
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Нууц үгээ дахин оруулна уу";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Нууц үг таарахгүй байна";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Шалгалт амжилттай бол дараагийн слайд руу
    setCurrentSlides(currentSlide + 1);
  };

  return (
    <div className="w-[480px] h-[655px] p-8 rounded-lg border bg-white flex flex-col justify-between m-auto gap-2">
      <div>
        <Header />
        <div className="gap-3 mt-7 flex flex-col">
          <Input
            label="Email"
            placeholder="Your email"
            error={formErrors.email}
            helperText={formErrors.email}
            type="email"
            name="email"
            handleChange={handleChange}
          />
          <Input
            label="Phone number"
            placeholder="Your phone number"
            error={formErrors.phoneNumber}
            helperText={formErrors.phoneNumber}
            type="text"
            name="phoneNumber"
            handleChange={handleChange}
          />
          <Input
            label="Password"
            placeholder="Your password"
            error={formErrors.password}
            helperText={formErrors.password}
            type="password"
            name="password"
            handleChange={handleChange}
          />
          <Input
            label="Confirm password"
            placeholder="Confirm your password"
            error={formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
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
