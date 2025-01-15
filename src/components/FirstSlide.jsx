import Header from "../components/Header";
import Button from "../components/Button";
import Input from "./Input";
export default function FirstSlide({
  setCurrentSlides,
  handleChange,
  currentSlide,
}) {
  const error = "";
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
            error={""}
            helperText="First name cannot contain special characters or numbers."
          />
          <Input
            name="lastName"
            label="Last name"
            placeholder="Your last name"
            handleChange={handleChange}
            error={""}
            helperTextText="Last name cannot contain special characters or numbers."
          />
          <Input
            name="userName"
            label="Username"
            placeholder="Your username"
            handleChange={handleChange}
            error={""}
            helperText="This username is already taken. Please choose another one."
          />
        </div>
      </div>
      <div>
        <Button buttonText={currentSlide} setCurrentSlide={setCurrentSlides} />
      </div>
    </div>
  );
}
