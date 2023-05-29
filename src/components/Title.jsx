function Title({underlineColor, centeredUnderline, content}) {
  const underlineColorCss = `after:bg-${underlineColor ? `[${underlineColor}]` : "standard-blue"}`;
  const underlinePosition = centeredUnderline ? "flex-col" : "";

  return (
    <div className={`${underlineColorCss} ${underlinePosition} flex font-bold text-2xl relative items-center after:content-[''] after:absolute after:bottom-[-0.7rem] after:w-12 after:h-[6px]`}>
      {content}
    </div>
  );
}

export default Title;

