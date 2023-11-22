import Title from "@/components/Title";
import ContactUs from "@/components/Inicio/ContactUs";
import { Link } from "react-router-dom";

function Community() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 xl:gap-8">
        <Title
          color="dark-green"
          content="Fortalecimento comunitário"
        />
        <p> O objetivo principal de um Instituto Comunitário é o Fortalecimento Comunitário,
          visando a melhoria da qualidade de vida de populações situadas em regiões geográficas
          bem delimitadas, o qual no caso do Icose é o estado de Sergipe. Esse fortalecimento comunitário é
          realizado através da captação, gestão e distribuição de recursos para organizações sem fins lucrativos
          e iniciativas sociais - que se dediquem a endereçar as variadas demandas das comunidades – e do desenvolvimento
          de capacidades e valorização de ativos locais.
        </p>
        <div>
          <p>Se você faz um trabalho com impacto positivo na sua comunidade (não precisa ter CNPJ)
            ou se você participa de uma ONG em Sergipe sua história nos interessa.
            Participe do nosso mapeamento preenchendo <a href="https://forms.gle/FNwejVq9X8kxUYEx8"
              target="_blank"
              class="text-blue-500 font-bold hover:underline">este formulário</a>.
          </p>
          <p> A resposta cuidadosa deste questionário ajudará ao ICOSE
            a compor seu planejamento estratégico e orientar sua atuação,
            inclusive para a construção de futuros editais e repasse de verbas.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <h4 className="font-bold justify-self-center">Gostaria de entender um pouco sobre as características de um Instituto Comunitário?</h4>
        </div>
        <div className="mx-auto text-white font-bold text-center flex justify-center md:flex-row flex-col gap-4 md:gap-8 lg:gap-12">
          <Link to={"/sobre"} className="bg-[#37B4AA] hover:bg-[#319D95] px-10 py-4 rounded-3xl ease-in duration-150">Saiba mais</Link>
          <Link to={"/comunitario"} className="bg-[#37B4AA] hover:bg-[#319D95] px-10 py-4 rounded-3xl ease-in duration-150">Institutos Comunitários no Brasil</Link>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default Community;

