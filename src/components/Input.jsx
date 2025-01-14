import FirstSlide from "./Firstslide";

export default function Input({
  label,
  handleChange,
  placeholder,
  error,
  helperText,
}) {
  return (
    <div className="">
      <p>{label}</p>
      <input
        className={`w-[100%] h-[20px] p-[12px] rounded-lg  gap-[8px] focus:outline-none ${
          error ? "focus:border-[#E14942]" : "focus:border-[#0CA5E9]"
        } border-[1px]`}
        onChange={handleChange}
        placeholder={placeholder}
        error={""}
      />
      <p>{helperText}</p>
    </div>
  );
}
