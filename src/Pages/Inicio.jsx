import { Envelope, Phone, Target, Heart } from "@phosphor-icons/react";
import Card from "@/components/Inicio/Card"
import PlusButton from "@/components/Inicio/PlusButton";
import Title from "@/components/Title"
import map from "@/assets/map.svg"
import businessWoman from "@/assets/business-woman.svg"
import workingWoman from "@/assets/working-woman.png"

function Home() {
  return (
    <div className="flex-1 text-2xl">
      <img 
        className="object-cover w-[640px] h-[320px] sm:w-[1024px] sm:h-[512px] lg:w-[1280px] lg:h-[640px] xl:w-full xl:h-[50rem]"
        src={map}
        alt="Mapa de Sergipe"
      />

      <section className="bg-background-section">
        <div className="flex flex-col gap-10 xl:gap-20 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
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
              content="Conheça o Icose:"
            /> 
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">
              <video className="flex-1" width="" height="" controls></video>
              <div className="flex-1 flex flex-col gap-4">
                <h4 className="font-bold">Fortalecimento comunitário</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. </p>
                <div className="flex flex-col gap-4">
                  <PlusButton />
                  <PlusButton />
                </div>
              </div> 
            </div>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis non metus interdum rutrum. Phasellus eros erat, tristique id felis eget, dignissim malesuada mauris. Quisque a justo diam. Phasellus in vestibulum risus. Nunc felis dui, bibendum in tortor eu, tincidunt viverra justo. Nullam pellentesque leo eget tristique efficitur.</p>
          </div>

          <div className="flex flex-col gap-4 items-center font-bold">
            <p>Fale conosco:</p>
            <div className="flex gap-2 flex-col lg:flex-row items-center lg:justify-around w-full">
              <div className="flex gap-2 items-center">
                <Envelope size={32} />
                <p className="text-center">email@email.com.br</p>
              </div>
              <span className="flex gap-2 items-center">
                <Phone size={32} />
                <p className="text-center">(79) 3223-2159 (Para recados)</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-16 pt-10 pb-10 xl:pb-20 mx-auto max-w-[100rem] px-12">
          <div className="flex flex-col gap-6 xl:gap-8">
            <Title 
              color="dark-green"
              content="MAPEAMENTO:"
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
      </section>
    </div>
  );
}

export default Home;

