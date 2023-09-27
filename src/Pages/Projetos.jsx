import Title from "@/components/Title";
import ProjectRender from "@/components/Projects/ProjectRender";
import Body from "@/components/Body"

function Projects() {
  return (
    <section className="bg-background-section flex-1 pt-[92px]">
      <Body>
        <div className="flex flex-col gap-8 xl:gap-8 ">
          <Title 
            color="standard-blue" 
            content="Projetos" 
          />
          <ProjectRender />
        </div>
      </Body>
    </section>
  );
}

export default Projects;
