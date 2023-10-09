import { icose } from "data/icose.js";
import { Link } from "react-router-dom";
import Title from "@/components/Title"

function MaratonaSolidariedade() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Se as atividades competitivas podem ser saudáveis e divertidas na infância com jogos e 
        brincadeiras o mesmo não acontece à medida que a criança vai crescendo e se inserindo 
        numa sociedade cada vez mais excludente, onde a competição perde seu lado lúdico e momentâneo 
        para se tornar uma preocupação constante. Num Brasil com grandes desigualdades sociais, 
        individualismo e onde existe o sentimento de escassez de oportunidades, muitas vezes o outro 
        é visto como uma ameaça, gerando situações de ansiedade, estresse e até depressão.
      </p>
      <p>
        Acreditamos no ser humano, por isto o ICOSE criou a <strong>Maratona da Solidariedade</strong>, onde o objetivo 
        é estimular desde criança a prática desta virtude e a propagação em seu entorno de uma corrente 
        de solidariedade.
      </p>
      <div className="flex flex-col gap-4">
        <div className="space-y-6">
          <Title 
            content="Como funciona?"
          />
          <div className="space-y-2">
            <p> 
              O ICOSE leva às escolas a Maratona da Solidariedade, que acontece uma vez ao ano.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Solidariedade entre as crianças:</strong> O ICOSE visita a escola e lança 
                o desafio às crianças para caminhar 42.195m (Maratona). Apenas unidas, somando a 
                distância que cada uma percorreu, elas conseguem atingir o objetivo.
              </li>
              <li>
                <strong>Solidariedade com a comunidade:</strong> Antes da Maratona da Solidariedade 
                as crianças buscam padrinhos/madrinhas que doarão um valor por cada 100m caminhados. 
              </li>
              <li>
                <strong>Cidadania:</strong> Após a conclusão do recebimento das doações, o ICOSE reverte 
                o valor arrecadado pelos alunos para uma comunidade, associação ou evento previamente 
                acordado com a escola e informado aos alunos. O ICOSE presta contas às crianças, padrinhos, 
                madrinhas e a escola do destino do valor arrecadado. 
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <p>
           Gostou? Quer saber mais? Sua escola está interessada em participar?
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Como cidadão:</strong> você pode aumentar o valor arrecadado 
              pelas crianças fazendo sua contribuição via PIX mencionando MARATONA 
              DA SOLIDARIEDADE. <Link to="/doacao" className="text-standard-blue hover:underline">Clique aqui</Link> para realizar sua doação!
            </li>
            <li>
              <strong>Como escola:</strong> Inscrições abertas para 2024, entre em 
              contato conosco para agendar uma visita. <a className="font-bold" href={`mailto:${icose.email}?body=Diga-nos o que precisa`}>{icose.email}</a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <Title
            content="Texto da sensibilização para as crianças do 1 ao 5 ano do ensino fundamental I - Escola Liceu de Estudos Integrados"
            centeredTitle={true}
          /> 
          <div className="space-y-2">
            <p>
              Crianças, nós gostaríamos de fazer algumas perguntas para vocês:
            </p>
            <ol className='list-decimal pl-8'>
              <li>
                Vocês acham que todas as crianças tem uma escola incrível como a de vocês?
              </li>
              <li>
                O que vocês fazem nas horas vagas e nos finais de semana? Vocês acham que todas 
                as crianças tem acesso ao lazer e a cultura?
              </li>
              <li>
                Quando vocês estão doentes, os pais de vocês levam vocês para qual hospital?
                Vocês acham que todos os hospitais são como os que vocês frequentam?
              </li>
              <li>
                E vocês acham que devemos nos preocupar apenas com o nosso bem estar, ou também com o bem estar dos outros?
              </li>
            </ol>
            <div className="space-y-2 pl-8">
              <p>
                Então, de acordo com o que a gente discutiu aqui, nós podemos concluir que nem
                todos tem acesso a uma educação, saúde e lazer de qualidade? Nem todas as
                crianças tem o bem estar que vocês tem?
              </p>
              <p>
                Certo porém, de que forma nos poderíamos pensar em ajudar essas crianças que não
                tem o que vocês tem? E assim ajudarmos a ter um mundo mais justo?
              </p>
            </div>
            <p>
              Nós, do Instituto Comunitário de Sergipe, junto com o colégio Liceu, estamos propondo
              uma atividade chamada <strong className="italic">Maratona da Solidariedade</strong>, maratona é uma corrida de longa
              duração, mais precisamente 42 km e 195 metros e solidariedade é um ato de bondade
              com o próximo.
            </p>
            <p>
              <strong>Maratona?</strong> Mas eu não caminho nem 1 km, muito menos 42 km 195 m!! Ok, <strong>EU</strong> não
              caminho isso, mas será que <strong>NÓS</strong> poderíamos caminhar essa distancia? Será que se
              todos nós caminharmos 300 metros, chegaremos a distancia de uma maratona? Nessa
              turma temos 20 alunos, 300 metros para cada aluno seriam 6000 metros: 6 km. Opa, já
              aumentou.
            </p>
          </div>
          <div className="space-y-6">
            <Title
              content="E o que isso tem haver com solidariedade?"
            />
            <div className="space-y-2">
              <p>
                Nós gostaríamos de propor um projeto: de vocês procurarem padrinhos que patrocinem
                cada 100 metros que vocês caminharem. Vocês irão procurar os padrinhos
                patrocinadores e após a caminhada irão cobrar esse valor para cada padrinho (Valores
                livres). Com isso, podemos arrecadar um valor que será repassado para crianças, como
                vocês, mas sem o privilégio que vocês tem.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Title
              content="Dia do evento"
            />
            <div className="space-y-2">
              <p>
                No dia do evento, faremos a caminhada na quadra e a cada 100 metros vocês irão
                carimbar o crachá de vocês, para que no final vocês possam cobrar o padrinho de vocês .
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Title
              content="Após o evento"
            />
            <div className="space-y-2">
              <p>
                Iremos fazer a prestação de contas e realizar a entrega do valor arrecado para crianças
                em situação de vulnerabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default MaratonaSolidariedade;

