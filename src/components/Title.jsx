import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config.js"

function Title({color, centeredTitle, content}) {
  const underlinePosition = centeredTitle ? "flex-col" : "";
  const underlineColor = setunderlineColor(color);

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

function setunderlineColor(color) {
  const colors = resolveConfig(tailwindConfig).theme.colors;
  const hexRegex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  const isHex = hexRegex.test(color);

  if (isHex)
    return color;

  if (!color || !colors[color])
    return colors["standard-blue"];

  return colors[color];
}

export default Title;

