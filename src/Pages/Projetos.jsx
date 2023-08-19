import Title from "@/components/Title"
import Project_MaratonaSolidariedade from "@/components/Projetos/Project_MaratonaSolidariedade";
import Project_RecantoPassaros from "@/components/Projetos/Project_RecantoPassaros";
import Project_ConhecendoTerritorio from "@/components/Projetos/Project_ConhecendoTerritorio";


function Projects() {
  return (
    <section className="bg-background-section ">
      <div className="flex flex-col gap-8 xl:gap-8 pb-10 pt-10 xl:pt-20 xl:pb-20 mx-auto max-w-[100rem] px-20">
        <h1>
          <Title 
            color="standard-blue"
            content="Projetos"
          />
        </h1>
        <Project_MaratonaSolidariedade />
        <Project_RecantoPassaros />
        <Project_ConhecendoTerritorio />
      </div>
    </section>
  );
}
  
export default Projects;