import { lazy, Suspense } from "react";
import Loading from "@/components/Loading";

function Project({ title: projectTitle , file: projectFileName }) {
 
  const ProjectContent = lazy(() => import(`./Contents/${projectFileName}.jsx`));

  return (
   <Suspense fallback={<Loading />}>
      <h2 className="font-bold">{projectTitle}</h2>
      <ProjectContent />
    </Suspense>
  )
}

export default Project;