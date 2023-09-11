import Title from "@/components/Title";

function Transparency({ title, content }) {

  return (
    <div className="flex flex-col gap-12">
      <h2>
        <Title
          color="dark-green"
          content={title}
        />
      </h2>
      {/* FAZER COMPONENTE PARA ANEXOS - Pegar Title como referencia */}
      {content}
    </div>
  )
}

export default Transparency;
