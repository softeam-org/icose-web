import Card from "@/components/Inicio/Card"
import { Target } from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react";

function Home() {
  return (
    <div className="flex-1 bg-background-section">
      <div className="w-full h-0 pt-[50%] bg-map bg-no-repeat bg-cover bg-center xl:p-0 xl:h-[50rem]"></div>
      <div className="mx-auto max-w-[110rem] px-12">
        <div className="flex gap-10 xl:gap-16 my-12 xl:my-28 flex-col min-[800px]:flex-row">
          <Card 
            icon={<Target size={32} />}
            title={"NOSSA MISSÃO"}
            text={"Promover o fortalecimento do protagonismo das comunidades locais e a atuação em rede, visando o desenvolvimento justo, solidário e sustentável de Sergipe."}
          />
          <Card 
            icon={<Heart size={32} weight="fill" />}
            title={"NOSSOS VALORES"}
            text={"Ética, solidariedade, inovação, transparência e comprometimento"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

