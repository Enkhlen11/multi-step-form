import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import BackButton from "./BackButton";
import { useState } from "react";
import { X } from "lucide-react";

export default function ThirdSlide({
  currentSlide,
  setCurrentSlides,
  backCurrentSlides,
}) {
  const [imageUrl, setImageUrl] = useState("");

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

  const fileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
      setFormValues((prev) => ({ ...prev, profileImage: file.name }));
      setFormErrors((prev) => ({ ...prev, profileImage: "" }));
    }
  };

  const deleteImage = () => {
    setImageUrl("");
    setFormValues((prev) => ({ ...prev, profileImage: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { dateOfBirth: "", profileImage: "" };

    if (!formValues.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Төрсөн өдрөө оруулна уу";
      isValid = false;
    } else {
      const birthYear = new Date(formValues.dateOfBirth).getFullYear();
      if (birthYear > 2006) {
        newErrors.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой.";
        isValid = false;
      }
    }

    if (!formValues.profileImage) {
      newErrors.profileImage = "Профайл зургаа оруулна уу";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("dateOfBirth", formValues.dateOfBirth);
      localStorage.setItem("profileImage", formValues.profileImage);
      localStorage.setItem("imageUrl", imageUrl);
      setCurrentSlides();
    }
  };

  return (
    <div className="w-[480px] h-[655px] p-8 rounded-lg bg-white flex flex-col justify-between m-auto gap-[8px]">
      <div>
        <Header />

        <div className="mt-[28px]">
          <Input
            name="dateOfBirth"
            type="date"
            label="Date of birth"
            value={formValues.dateOfBirth}
            handleChange={handleChange}
            error={formErrors.dateOfBirth}
          />
          {formErrors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.dateOfBirth}
            </p>
          )}
        </div>

        <div className="mt-[20px] w-full relative">
          <label className="w-full" htmlFor="addImage">
            <p className="font-semibold text-[#334155]">
              Profile image <span className="text-[#E14942]">*</span>
            </p>
            <div
              className="w-full h-[200px] mt-[8px] rounded-md bg-[#7F7F80]/5 flex items-center justify-center overflow-hidden relative"
              style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!imageUrl && (
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <img src="./image.svg" alt="" className="w-8 h-8 mb-2" />
                  <p>Add image</p>
                </div>
              )}
            </div>
          </label>

          {imageUrl && (
            <button
              onClick={deleteImage}
              className="absolute top-2 right-2 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              <X size={16} />
            </button>
          )}

          <input
            id="addImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={fileUpload}
          />
          {formErrors.profileImage && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.profileImage}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <BackButton backCurrentSlides={backCurrentSlides} />
        <Button
          buttonText={currentSlide}
          ChevronRight
          handleClick={handleNext}
        />
      </div>
    </div>
  );
}
