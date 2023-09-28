import Project from "@/components/Projects/Project";

function OxenteMulher() {
  return (
    <Project title="Projeto Oxente Mulher">
      <div className="flex flex-col gap-4">
        <p>
          Maria é uma mulher nordestina que mora na periferia de uma grande cidade,
          ela é invisível para a sociedade, ela é dependente financeiramente do marido,
          ela não tem autonomia na família, ela desconhece seu valor e seu potencial,
          ela está deprimida.  Quantas Marias existem no Brasil? Quantas Marias
          moram em Sergipe? O que pode ser feito para tornar essas Marias visíveis
          pela sociedade?
        </p>
        <p>
          Com essa proposta o ICOSE deseja proporcionar às mulheres sergipanas acesso a 
          palestras destacando o PODER DELAS na condução de sua história, além de cursos 
          básicos de empreendedorismo, estética, culinária, hortas comunitárias, entre outros, 
          considerando o potencial da mulher na sua comunidade. Aliado aos cursos desejamos 
          criar bolsas de capital semente que permitam vislumbrar a melhoraria das condições 
          de vida da sua família e, através do seu exemplo, propagar aos seus filhos e a todos 
          com quem convive que, outros destinos são possíveis com o poder do agir com perseverança 
          e esperança.
        </p>
        <p>
          Participe desta corrente que acredita na força da mulher, para que o ICOSE junto com 
          seus parceiros leve esta semente de esperança e consiga dar visibilidade não só as 
          mulheres da periferia, mas também a força e diversidade da mulher em outras regiões 
          do Estado de Sergipe.
        </p>
        <p>
          <div>Projeto Oxente Mulher inserido na Campanha Sergipanas em Foco</div>
          Lançamento da Campanha Coletiva  02 de outubro.
          <span> <a href="https://benfeitoria.com/projeto/sergipanasemfoco" className="text-standard-blue hover:underline text-black">Clique aqui</a> </span>
          para acesar.
        </p>
      </div>
    </Project>
  );
}

export default OxenteMulher;

