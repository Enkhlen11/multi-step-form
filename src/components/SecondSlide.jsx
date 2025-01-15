import Header from "../components/Header";
import Button from "../components/Button";
import Input from "./Input";
import BackButton from "./BackButton";
export default function SecondSlide({
  setCurrentSlides,
  backCurrentSlides,
  currentSlide,
}) {
  const error = "";
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
          />
          <Input
            label="Phone number"
            placeholder="Your phone number"
            error={""}
            helperTextText="Last name cannot contain special characters or numbers."
          />
          <Input
            label="Password"
            placeholder="Your password"
            error={""}
            helperText="This username is already taken. Please choose another one."
          />
          <Input
            label="Confirm password"
            placeholder="Your confirm password"
            error={""}
            helperText="This username is already taken. Please choose another one."
          />
        </div>
      </div>
      <div className="flex gap-2">
        <BackButton backCurrentSlides={backCurrentSlides} />
        <Button
          buttonText={currentSlide}
          ChevronRight
          setCurrentSlide={setCurrentSlides}
        />
      </div>
    </div>
  );
}
