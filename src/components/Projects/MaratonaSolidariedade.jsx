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
      </div>
    </div>
  );
}
  
export default MaratonaSolidariedade;

