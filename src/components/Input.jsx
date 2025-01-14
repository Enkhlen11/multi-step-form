import FirstSlide from "./Firstslide";

export default function Input({ label, handleChange, placeholder }) {
  return (
    <div className="]">
      <p>{label}</p>
      <input
        className="w-[100%] h-[20px] p-[12px] border-1 "
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
