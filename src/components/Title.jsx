import setColor from "@/utils/setColor"

function Title({color, centeredTitle, content}) {
  const underlinePosition = centeredTitle ? "flex-col text-center" : "";
  const underlineColor = setColor(color);

  return ( 
    <div className={`${underlinePosition} flex font-bold text-2xl relative items-center`}>
      {content}
      <span 
        style={{ backgroundColor: `${underlineColor}`}}
        className="absolute bottom-[-0.7rem] w-12 h-[6px]" 
      />
    </div>
  );
}

export default Title;

