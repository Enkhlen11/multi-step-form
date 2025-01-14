import Header from "../components/Header";
import Button from "../components/Button";
import Input from "./Input";
export default function FirstSlide(
  setCurrentSlide,
  currentSlide,
  formSteps,
  helperText
) {
  const printFirstName = () => {
    console.log("first name");
  };
  const printLastName = () => {
    console.log("last name");
  };
  const printUserName = () => {
    console.log("username");
  };
  const error = "";
  return (
    <div className="w-[416px] h-[591px] p-8 rounded-lg border-1 bg-gray-500 flex flex-col justify-between m-auto gap-[8px]">
      <div>
        <Header />
        <div className="gap-[12px] mt-[28px]">
          <Input
            label="First name"
            placeholder="Your first name"
            handleChange="{printFirstName}"
            error={""}
            helperText="First name cannot contain special characters or numbers."
          />
          <Input
            label="Last name"
            placeholder="Your last name"
            handleChange={printLastName}
            error={""}
            helperTextText="Last name cannot contain special characters or numbers."
          />
          <Input
            label="Username"
            placeholder="Your username"
            handleChange={printUserName}
            error={""}
            helperText="This username is already taken. Please choose another one."
          />
        </div>
      </div>
      <div>
        <Button
          buttonText=" Continue 1/3"
          ChevronRight
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
          formSteps={formSteps}
        />
      </div>
    </div>
  );
}
