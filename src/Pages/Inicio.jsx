import Card from "@/components/Inicio/Card"
import Title from "@/components/Title";
import { Target } from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react";
import ArrowList from "@/components/Inicio/ArrowList";

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
        <div className="flex gap-16 my-12 flex-col min-[800px]:flex-col ">
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
      </div>
      </div>
    </div>
  );
}

export default Home;

