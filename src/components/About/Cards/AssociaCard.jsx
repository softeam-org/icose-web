function AssociaCard ({name, text}){
  return(
    <div className="px-11 py-20 rounded-md bg-[#FBFBFB] shadow-md flex justify-center">
      <div className="flex flex-col justify-center items-center space-y-7 lg:space-x-12 ">
        <div className="text-xl font-semibold">{name}</div>
        <div >
          <p className="text-xl font-normal pt-5">{text}</p>
        </div>
      </div>
    </div>  
  );
};
 
export default AssociaCard;