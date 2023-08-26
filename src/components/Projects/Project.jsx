function Project({ title, content }) {
 
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-bold">{title}</h1>
      {content}
    </div>
  )
}

export default Project;
