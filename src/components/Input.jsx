import FirstSlide from "./Firstslide";

export default function Input({ label, handleChange, placeholder, name }) {
  return (
    <div>
      <p>
        {label} <span className="text-[#E14942]">*</span>
      </p>
      <input
        name={name}
        className="w-[100%] h-[44px] p-[12px] border-2 rounded-lg"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
