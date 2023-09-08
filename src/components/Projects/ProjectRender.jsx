import { projects } from "data/projects";
import Project from "./Project";

function ProjectRender() {

  return(
    <div className="project-render flex flex-col gap-14">
      {projects.map(project => {
        const ProjectTitle = project.title;
        const ProjectFileName = project.filename;
        return (
          <div className='project-content' key={project.filename}>
            <Project title={ProjectTitle} file={ProjectFileName}  />
          </div>
        )
      })}
    </div>
  );
}

export default ProjectRender;
