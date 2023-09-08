import { lazy } from "react";
import { projects } from "data/projects";
import Project from "./Project";

const projectsList = projects.map(project => {
  const title = project.title;
  const Content = lazy(() => import(`./Contents/${project.filename}.jsx`));
  return <Project key={project.filename} title={title} content={<Content />} />;
});

function ProjectRender() {
  return (
    <div className="flex flex-col gap-12">
      {projectsList}
    </div>
  );
}

export default ProjectRender;
