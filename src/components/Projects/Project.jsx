import Title from "@/components/Title";

function Project({ title, children }) {
 
  return (
    <div className="flex flex-col gap-8">
      <Title content={title}/>
      {children}
    </div>
  )
}

export default Project;
