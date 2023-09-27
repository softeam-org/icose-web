import Title from "@/components/Title";
import Supporters from "@/components/Inicio/Supporters";
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
        <p>O objetivo principal de um Instituto Comunitário é o Fortalecimento Comunitário, visando a melhoria da qualidade de vida de populações situadas em regiões geográficas bem delimitadas, o qual no caso do Icose é o estado de Sergipe. Esse fortalecimento comunitário é realizado através da captação, gestão e distribuição de recursos para organizações sem fins lucrativos e iniciativas sociais - que se dediquem a endereçar as variadas demandas das comunidades – e do desenvolvimento de capacidades e valorização de ativos locais.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <h4 className="font-bold justify-self-center">Gostaria de entender um pouco sobre as características de um Instituto Comunitário?</h4>
        </div>
        <div className="flex justify-center flex-row gap-4 lg:gap-12 flex-col lg:flex-row">
          <Link to={"/sobre"} className="text-white font-bold px-20 sm:px-40 py-4 bg-dark-green/100 rounded-3xl self-center hover:bg-standard-blue hover:scale-[1.02] ease-in duration-150">Saiba mais</Link>
          <Link to={"/comunitario"} className="text-white font-bold px-10 py-4 bg-dark-green rounded-3xl self-center hover:bg-standard-blue hover:scale-[1.02] ease-in duration-150">Institutos Comunitários no Brasil</Link>
        </div>
      </div>

      <ContactUs />
      <Supporters />

    </div>
  );
}

export default Community;

