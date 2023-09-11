import Carousel from "./Carousel/Carousel";
function News (){
  return(
    <div className="flex flex-col items-center w-full py-10">
			<h1 className=" text-2xl font-bold mb-6">ULTIMAS NOTÍCIAS</h1>
			<div className="w-9/12">
        <Carousel/>
      </div>
    </div>
  );
}
export default News;