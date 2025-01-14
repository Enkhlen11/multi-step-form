import { ChevronRight } from "lucide-react";

export default function Button() {
  return (
    <div className="w-[100%] pl-[12px] pt-[10px] pb-[10px]  pr-[12px]  bg-[#121316] text-[#FFFFFF] flex justify-center items-center rounded-[6px]">
      <button className="flex">
        Continue 1/3 <ChevronRight />
      </button>
    </div>
  );
}
