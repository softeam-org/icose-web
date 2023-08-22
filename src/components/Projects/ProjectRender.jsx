import { lazy, Suspense } from "react";
import Loading from "@/components/Loading";
import { projects } from "data/projects";

function ProjectRender() {
  return (
    <div className="project-render flex flex-col gap-8">
      {projects.map((project) => {
        const ProjectComponent = lazy(() => import(`./Contents/${project.filename}.jsx`));
        return (
          <div className='project-content' key={project.filename}>
            <Suspense fallback={<Loading />}>
              <ProjectComponent />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectRender;
