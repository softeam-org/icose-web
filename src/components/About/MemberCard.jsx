function MemberCard({name, text}) {
  return (
    <div className="p-10 rounded-md bg-[#FBFBFB] shadow-md">
      <div className="flex flex-col items-center gap-7 lg:space-x-12">
        <div className="text-xl font-semibold">{name}</div>
        <p className="text-xl font-medium">{text}</p>
      </div>
    </div>
  );
};
 
export default MemberCard;
