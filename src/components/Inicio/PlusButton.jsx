import { PlusCircle } from "@phosphor-icons/react";

function PlusButton() {
  return (
    <div className="select-none cursor-pointer flex gap-2 bg-[#ECECEC] px-3 py-6 rounded-xl">
      <PlusCircle 
        className="text-standard-blue"
        size={32}
        weight="fill"
      />
      <span>Lorem ipsum dolor sit amet</span>
    </div>
  );
}

export default PlusButton;
