import Title from "@/components/Title";

function Card({icon, title, text}) {
  const cardTitle = (
    <div className="flex gap-2 items-center">
      {icon}
      {title}
    </div>
  );
  return (
    <div className="flex-1 bg-[#FBFBFB] shadow-md rounded-xl">
      <div className="flex flex-col gap-8 p-8">
        <Title 
          color="#F59E0B"
          content={cardTitle}
        />
        <div className="text-[#545454] text-xl">{text}</div>
      </div>
    </div> 
  );
}

export default Card;

