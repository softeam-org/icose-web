import businessWoman from "@/assets/business-woman.svg"
import workingWoman from "@/assets/working-woman.png"
import Title from "@/components/Title"

function Mapping() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 xl:gap-8">
        <Title 
          color="dark-green"
          content="Mapeamento:"
        />
        <p>Para identificar o potencial e as necessidades, estamos realizando o mapeamento das ONGs e iniciativas individuais no estado de Sergipe. Estas informações serão essenciais para entender as reais necessidades de cada um de vocês e assim construirmos juntos um caminho de fortalecimento mútuo. Participe!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="pl-10 pt-10 self-center">
          <img 
            className="shadow-[-2.5rem_-2.5rem] shadow-dark-green w-full lg:w-auto max-w-md"
            src={workingWoman}
            alt="Mulher trabalhando em serviço comunitário"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>Vestibulum tempor condimentum nisl, et rhoncus lorem faucibus vel. Donec eu lectus id tortor lobortis aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lobortis purus sed tellus aliquam accumsan.</p>
          <button className="text-white font-bold px-3 py-4 bg-dark-green rounded-xl self-center">Acessar</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-16">
        <div className="pr-10 pb-10 self-center">
          <img 
            className="shadow-[2.5rem_2.5rem] shadow-dark-green w-full lg:w-auto max-w-md"
            src={businessWoman}
            alt="Mulher sorrindo"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>Vestibulum tempor condimentum nisl, et rhoncus lorem faucibus vel. Donec eu lectus id tortor lobortis aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lobortis purus sed tellus aliquam accumsan.</p>
          <button className="text-white font-bold px-3 py-4 bg-dark-green rounded-xl self-center">Acessar</button>
        </div>
      </div>
    </div>
  );
}

export default Mapping;

