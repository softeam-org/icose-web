import ArrowList from "@/components/Inicio/ArrowList";
import Title from "@/components/Title"
import InformativoIcose from "@/assets/InformativoIcose.svg";

function Presentation() {
  const items = [
    'De forma transparente na diversidade de causas e temas;',
    'Identificando, reunindo, fortalecendo e assessorando as ONG e/ou iniciativas de pessoas físicas que atuem na nossa comunidade de forma responsável;',
    'Promovendo o intercâmbio e parcerias entre organizações da sociedade civil, órgãos públicos e privados e pessoas físicas;',
    'Incentivando a prática da doação, voluntariado e engajamento comunitário;',
    'Promovendo os valores humanos universais, como a ética, a solidariedade, a generosidade entre outros valores;',
    'Fomentando o empreendedorismo e o desenvolvimento de iniciativas inovadoras sociais, culturais, educacionais, produtivas, esportivas e ambientais;',
    'Criando um fundo de recursos que proporcione sustentabilidade de suas ações e constitua um ativo permanente para investimentos socioambientais comunitários em Sergipe.'
  ];

  return (
    <div className="flex gap-16 my-5 flex-col min-[800px]:flex-col ">
      <div>
        <h1>
          <Title
            color="#1E3A8A"
            content="No Que Acreditamos"
          />
        </h1>
        <div className="flex flex-col gap-8">
          <p className="mt-8">
            Acreditamos que a <strong>REAL TRANSFORMAÇÃO SOCIAL</strong>, requer <strong>VALORES HUMANOS</strong> e <strong>ENGAJAMENTO</strong> da comunidade,
            um processo que se inicia no humano e se expande através das suas <strong>AÇÕES</strong> na comunidade.
          </p>
          <p>
            O Instituto Comunitário de Sergipe – ICOSE foi criado para trabalhar <strong>COM</strong> a comunidade,
            não para a comunidade. <strong>JUNTOS</strong> somos mais criativos, mais eficazes e mais fortes.
          </p>
        </div>
      </div>
      <div>
        <h1>
          <Title
            color="#1E3A8A"
            content="Proposta de Atuação"
          />
        </h1>
        <div className="flex flex-col gap-8">
          <p className="mt-8 font-medium">
            Nossa proposta é atuar EM SERGIPE:
          </p>
          <ArrowList items={items} />
        </div>
        <div className="flex justify-center my-20">
          <img src={InformativoIcose} alt="Imagem informativa da icose " className="w-full md:w-2/5" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
