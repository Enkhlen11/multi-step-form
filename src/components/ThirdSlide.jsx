import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import BackButton from "./BackButton";
export default function ThirdSlide({
  currentSlide,
  setCurrentSlides,
  backCurrentSlides,
}) {
  return (
    <div className="w-[480px] h-[655px] p-8 rounded-lg border-1  bg-[#FFFFFF]  flex flex-col justify-between m-auto gap-[8px]">
      <div>
        <Header />
        <div className="gap-[12px] mt-[28px]">
          <Input
            name=""
            label="Date of birth"
            placeholder="--/--/--"
            // handleChange={handleChange}
            error={""}
            helperText="First name cannot contain special characters or numbers."
          />
          <Input
            name=""
            label="Profile image"
            placeholder="Your last name"
            // handleChange={handleChange}
            error={""}
            helperTextText="Last name cannot contain special characters or numbers."
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
