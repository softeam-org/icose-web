import Title from "@/components/Title";

function Project({ title, children }) {
 
  return (
<<<<<<< HEAD
   <Suspense fallback={<Loading />}>
      <h2 className="font-bold mb-6">{projectTitle}</h2>
      <ProjectContent />
    </Suspense>
=======
    <div className="flex flex-col gap-8">
      <Title content={title}/>
      {children}
    </div>
>>>>>>> dev
  )
}

export default Project;
