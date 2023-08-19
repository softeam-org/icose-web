import Title from "@/components/Title"

function Projects() {
  return (
    <section className="bg-background-section ">
      <div className="flex flex-col gap-8 xl:gap-8 pb-10 pt-10 xl:pt-20 xl:pb-20 mx-auto max-w-[100rem] px-20">
        <Title 
          color="standard-blue"
          content="Projetos"
        />
        <div>
          <h2 className="font-bold">Projeto Maratona da Solidariedade</h2>
          <p>Donec tincidunt justo ut luctus fringilla. Etiam non ligula id tortor congue facilisis. Sed elementum tincidunt purus, a interdum augue posuere ut. Phasellus et eros eros. Proin porta efficitur ultricies. Duis justo justo, iaculis vel placerat nec, tristique et enim. Maecenas eleifend nec nulla quis eleifend. Nunc convallis orci vitae iaculis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc rhoncus, nunc ac vehicula bibendum, urna magna condimentum velit, faucibus euismod odio lectus a turpis. Vivamus lacinia felis a erat posuere, ac pulvinar ligula pretium. Vivamus nec varius est. Nam dapibus sodales orci non faucibus. Etiam viverra pellentesque risus, vel consectetur dolor dictum posuere.</p>  
        </div>
        <div>
          <h2 className="font-bold">Projeto Recanto dos Pássaros</h2>
          <p>Donec tincidunt justo ut luctus fringilla. Etiam non ligula id tortor congue facilisis. Sed elementum tincidunt purus, a interdum augue posuere ut. Phasellus et eros eros. Proin porta efficitur ultricies. Duis justo justo, iaculis vel placerat nec, tristique et enim. Maecenas eleifend nec nulla quis eleifend. Nunc convallis orci vitae iaculis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc rhoncus, nunc ac vehicula bibendum, urna magna condimentum velit, faucibus euismod odio lectus a turpis. Vivamus lacinia felis a erat posuere, ac pulvinar ligula pretium. Vivamus nec varius est. Nam dapibus sodales orci non faucibus. Etiam viverra pellentesque risus, vel consectetur dolor dictum posuere.</p>  
        </div>
        <div>
          <h2 className="font-bold">Projeto Conhecendo o Território</h2>
          <p>Para identificar o potencial e as necessidades, estamos realizando o mapeamento das ONG e iniciativas individuais no estado de Sergipe. Estas informações serão essenciais para a construção de futuros editais e repasse de verbas. Participe!</p>
          <br />
          <p>Formulários</p>
          <ul className= "list-disc px-12">
            <li>ONG</li>
            <li>Projetos individuais</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}
  
export default Projects;
  
  