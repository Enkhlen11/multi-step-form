import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "./Input";
export default function FirstSlide({ setCurrentSlides, currentSlide }) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    // console.log(formValues);
    const { firstName, lastName, userName } = formValues;
    // setCurrentSlides();
    if (!firstName.trim()) {
      setFormErrors((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу?" }));
    } else if (/[^a-zA-Z]/.test(firstName)) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Текст оруулна уу?",
      }));
    }
    if (!lastName.trim()) {
      setFormErrors((prev) => ({ ...prev, lastName: "Нэрээ оруулна уу?" }));
    } else if (/[^a-zA-Z]/.test(lastName)) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Текст оруулна уу?",
      }));
    }
    if (!userName.trim()) {
      setFormErrors((prev) => ({ ...prev, userName: "Нэрээ оруулна уу?" }));
    } else if (/[^a-zA-Z]/.test(userName)) {
      setFormErrors((prev) => ({ ...prev, userName: "Текст оруулна уу?" }));
    } else {
      return setCurrentSlides(currentSlide + 1);
    }
  };

  return (
    <div className="w-[480px] h-[655px] p-8 rounded-lg border-1  bg-[#FFFFFF]  flex flex-col justify-between m-auto gap-[8px]">
      <div>
        <Header />
        <div className="gap-[12px] mt-[28px]">
          <Input
            name="firstName"
            label="First name"
            placeholder="Your first name"
            handleChange={handleChange}
            error={formErrors.firstName}
            helperText="First name cannot contain special characters or numbers."
          />

          <Input
            name="lastName"
            label="Last name"
            placeholder="Your last name"
            handleChange={handleChange}
            error={formErrors.lastName}
            helperText="Last name cannot contain special characters or numbers."
          />
          <Input
            name="userName"
            label="Username"
            placeholder="Your username"
            handleChange={handleChange}
            error={formErrors.userName}
            helperText="This username is already taken. Please choose another one."
          />
        </div>
      </div>
      <div>
        <Button buttonText={currentSlide} setCurrentSlide={handleClick} />
      </div>
    </div>
  );
}
