import Title from "@/components/Title";
import ProjectRender from "@/components/Projects/ProjectRender";

function Projects() {
  return (
    <section className="bg-background-section flex-1">
      <div className="flex flex-col gap-8 xl:gap-8 pb-10 pt-10 xl:pt-20 xl:pb-20 mx-auto max-w-[100rem] px-12">
        <h1>
          <Title 
            color="standard-blue" 
            content="Projetos" 
          />
        </h1>
        <ProjectRender />
      </div>
    </section>
  );
}

export default Projects;
