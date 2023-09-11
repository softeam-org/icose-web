import Title from "@/components/Title";

function Transparency({ title, content }) {

  return (
    <div className="flex flex-col gap-2">
      <h1>
        <Title
          color="standard-blue"
          content={title}
        />
      </h1>
      {/* <h1 className="text-lg font-bold"></h1> */}
      {content}
    </div>
  )
}

export default Transparency;
