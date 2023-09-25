function VolunteerCards ({name, text}){
  return(
    <div className="pl-14 pr-14 lg:pr-28 py-20 bg-[#FBFBFB] shadow-md flex justify-center">
      <div className="flex flex-wrap w-full lg:flex-nowrap justify-center items-center lg:space-x-12 ">
        <div className="p-5 rounded-full bg-[#D9D9D9]">
          <div className="w-40 h-40 flex items-center justify-center ">{img}</div>
        </div>
        <div className="w-full">
          <p className="text-2xl flex justify-center w-full font-medium pt-5">{text}</p>
        </div>
      </div>
    </div>  
  );
};
 
export default VolunteerCards;