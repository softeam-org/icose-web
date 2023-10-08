import { Target, Heart } from "@phosphor-icons/react";
import Card from "@/components/Inicio/Card"

function Cards() {
  return (
    <div className="flex gap-8 flex-col xl:gap-16 min-[800px]:flex-row">
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
  );
}

export default Cards;

