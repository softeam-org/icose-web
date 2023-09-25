function CollaboratorCard ({name, text}){
  return(
    <div className="px-10 pt-7 pb-10 rounded-md bg-[#FBFBFB] shadow-md flex justify-center">
        <div className="flex flex-col justify-center items-center space-y-7 lg:space-x-12">
          <div className="text-xl font-semibold">{name}</div>
          <div>
            <p className="text-xl font-medium">{text}</p>
          </div>
      </div>
    </div>
  

  );
};
 
export default CollaboratorCard;