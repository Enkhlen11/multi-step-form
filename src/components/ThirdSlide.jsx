import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import BackButton from "./BackButton";
import { useState } from "react";
export default function ThirdSlide({
  currentSlide,
  setCurrentSlides,
  backCurrentSlides,
}) {
  const [imageUrl, setImageUrl] = useState();

  const fileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
      setFormErrors((prev = { ...prev, profileImage: "" }));
    }
  };

  const [formValues, setFormValues] = useState({
    dateOfBirth: "",
    profileImage: "",
  });
  const [formErrors, setFormErrors] = useState({
    dateOfBirth: "",
    profileImage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validatefROM = () => {
    let isValid = true;
    const newErrors = { ...formErrors };
    if(!formValues.dateOfBirth.trim()){}
  };
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
          <div className="flex w-[100%] mt-[20px]">
            <label className="w-[100%]" htmlFor="addImage">
              <p>
                Profile image <span className="text-[#E14942]">*</span>
              </p>
              <div className="w-[100%] h-[180px] p-[16px] bg-[#7F7F80]/5 flex flex-col items-center justify-center ">
                {imageUrl ? (
                  <img className="w-[100%] h-[180px]  " src={imageUrl} alt="" />
                ) : (
                  <div className="w-[100%] flex flex-col items-center justify-center ">
                    <img src="./image.svg" alt="" />
                    <p>Add image</p>
                  </div>
                )}
              </div>
            </label>
            <input
              id="addImage"
              type="file"
              className="hidden"
              onChange={fileUpload}
            />
          </div>
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
