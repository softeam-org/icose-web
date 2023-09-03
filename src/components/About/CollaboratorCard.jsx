function CollaboratorCard ({img, text}){
  return(
    <div className="px-10 py-7 bg-[#FBFBFB] shadow-md flex justify-center">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:space-x-12 ">
          <div className="p-5 rounded-full bg-[#D9D9D9]">
            <div className="w-40 h-40  flex items-center justify-center ">{img}</div>
          </div>
          <div className="w-full">
            <p className="text-xl font-medium pt-5">{text}</p>
          </div>
      </div>
    </div>
  

  );
};
 
export default CollaboratorCard;