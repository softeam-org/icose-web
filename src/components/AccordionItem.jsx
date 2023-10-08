import setColor from "@/utils/setColor"

function AccordionItem({ icon=null, bgColor, textColor="#FFFFFF", title, children }) {
  return (
    <div style={{ backgroundColor: `${setColor(bgColor)}`, color: `${setColor(textColor)}`}} className="collapse collapse-arrow">
      <input type="radio" name="accordion" />
      <div className="collapse-title text-xl font-medium flex flex-row gap-5">
        <span>{icon}</span>  
        <span className="mx-auto uppercase">{title}</span>
      </div>
      <div className="collapse-content text-base px-16">
        {children}
      </div>
    </div>
  )
}

export default AccordionItem;
