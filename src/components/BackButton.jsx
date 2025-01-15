import { ChevronLeft } from "lucide-react";

export default function BackButton({}) {
  return (
    <div className="w-[104px] h-[44px] rounded-[6px] bg-[#fff] border-[gray] border-[1px] flex items-center justify-center">
      <button className="flex items-center justify-center">
        <ChevronLeft />
        Back
      </button>
    </div>
  );
}
