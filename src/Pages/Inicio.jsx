import { Target, Heart } from "@phosphor-icons/react";
import Card from "@/components/Inicio/Card"
import PlusButton from "@/components/Inicio/PlusButton";
import Title from "@/components/Title"
import map from "@/assets/map.svg"

function Home() {
  return (
    <div className="flex-1">
      <img 
        className="object-cover w-[640px] h-[320px] sm:w-[1024px] sm:h-[512px] lg:w-[1280px] lg:h-[640px] xl:w-full xl:h-[50rem]"
        src={map}
        alt="Mapa de Sergipe"
      />
      <div className="bg-background-section">
        <div className="flex flex-col gap-10 xl:gap-20 py-10 xl:py-20 mx-auto max-w-[100rem] px-12">
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

          <div className="flex flex-col gap-6 xl:gap-8">
            <Title 
              color="standard-blue"
              content="Conheça o Icose"
            /> 
            <p className="font-medium text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">
              <video className="flex-1" width="" height="" controls></video>
              <div className="flex-1 flex flex-col gap-4 text-2xl">
                <h4 className="font-bold">Fortalecimento comunitário</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. </p>
                <div className="flex flex-col gap-4">
                  <PlusButton />
                  <PlusButton />
                </div>
              </div> 
            </div>
            <p className="font-medium text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
            <p className="font-medium text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

