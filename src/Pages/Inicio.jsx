import Card from "@/components/Inicio/Card"
import Title from "@/components/Title";
import { Target } from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react";
import ArrowList from "@/components/Inicio/ArrowList";
import map from "@/assets/map.svg"
import Cards from "@/components/Inicio/Cards"
import Presentation from "@/components/Inicio/Presentation"
import ContactUs from "@/components/Inicio/ContactUs"
import Mapping from "@/components/Inicio/Mapping";

function Home() {
  
  const items = [
    'de forma transparente na diversidade de causas e temas;',
    'identificar, reunir, fortalecer e assessorar as ONG e/ou iniciativas de pessoas físicas que atuem na nossa comunidade de forma responsável;',
    'promover o intercâmbio e parcerias entre organizações da sociedade civil, órgãos públicos e privados e pessoas físicas;',
    'incentivar a prática da doação, voluntariado e engajamento comunitário;',
    'promover os valores humanos universais, como a ética, a solidariedade, a generosidade entre outros valores;',
    'fomentar o empreendedorismo e o desenvolvimento de iniciativas inovadoras sociais, culturais, educacionais, produtivas, esportivas e ambientais;',
    'criar um fundo de recursos que proporcione sustentabilidade de suas ações e constitua um ativo permanente para investimentos socioambientais comunitários em Sergipe.'
  ];

  return (
    <div className="flex-1 text-2xl">
      <img 
        className="object-cover w-[640px] h-[320px] sm:w-[1024px] sm:h-[512px] lg:w-[1280px] lg:h-[640px] xl:w-full xl:h-[50rem]"
        src={map}
        alt="Mapa de Sergipe"
      />

      <section className="bg-background-section">
        <div className="flex flex-col gap-10 xl:gap-20 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
          <Cards />
          <Presentation />
          <ContactUs />
        </div>
      </section>

      {/* <div className="flex gap-16 my-12 flex-col min-[800px]:flex-col ">
        <h2 className="flex w-full font-semibold text-xl justify-center">
          Conheça a Icose
        </h2>
        <div>
          <h1> 
            <Title 
                color="#1E3A8A"
                content = "No Que Acreditamos"
            /> 
          </h1>
            <div className="flex flex-col gap-8 text-xl">
              <p className="mt-8">
                  Acreditamos que a REAL TRANSFORMAÇÃO SOCIAL, requer VALORES HUMANOS e ENGAJAMENTO da comunidade, 
                  um processo que se inicia no humano e se expande através das suas AÇÕES na comunidade.
              </p>
              <p>
                  O Instituto Comunitário de Sergipe – ICOSE foi criado para trabalhar COM a comunidade, 
                  não para a comunidade. JUNTOS somos mais criativos, mais eficazes e mais fortes.
              </p>
            </div>
        </div>
        <div>
            <h1> 
            <Title 
                color="#1E3A8A"
                content = "Proposta de Atuação"
            /> 
          </h1>
          <div className="flex flex-col gap-8 text-xl">
            <p className="mt-8">
            Nossa proposta é atuar EM SERGIPE:
            </p>
            <ArrowList items={items}/>
          </div>
        </div>
      </div> */}

      <section>
        <div className="flex flex-col gap-16 pt-10 pb-10 xl:pb-20 mx-auto max-w-[100rem] px-12">
          <Mapping />
        </div>
      </section>
    </div>
  );
}

export default Home;

