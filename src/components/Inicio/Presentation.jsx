import PlusButton from "@/components/Inicio/PlusButton";
import Title from "@/components/Title";

function Presentation() {
  return (
    <div className="flex flex-col gap-6 xl:gap-8">
      <Title 
        color="standard-blue"
        content="Conheça o Icose:"
      /> 
      <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">
        <video className="flex-1" width="" height="" controls></video>
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="font-bold">Fortalecimento comunitário</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. </p>
          <div className="flex flex-col gap-4">
            <PlusButton />
            <PlusButton />
          </div>
        </div> 
      </div>
      <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
      <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
    </div>
  );
}

export default Presentation;

