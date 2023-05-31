import { Target } from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react";
import Card from "@/components/Inicio/Card"
import map from "@/assets/map.svg"

function Home() {
  return (
    <div className="flex-1 bg-background-section">
      <img 
        className="object-cover w-[640px] h-[320px] sm:w-[1024px] sm:h-[512px] lg:w-[1280px] lg:h-[640px] xl:w-full xl:h-[50rem]"
        src={map}
        alt="Mapa de Sergipe"
      />
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

