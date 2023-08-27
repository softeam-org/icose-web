import mail from "@/assets/mail.svg";
import phone from "@/assets/phone.svg";
import idis from "@/assets/LOGO-IDIS.png";
import tt from "@/assets/LOGO-TT.png";
import Title from "@/components/Title";

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

      <div className="flex flex-col gap-16">
        <div className="flex justify-center">
          <h4 className="font-bold justify-self-center">Gostaria de entender um pouco sobre as características de um Instituto Comunitário?</h4>
        </div>
          <div className="flex justify-center flex-row gap-12">
            <button className="text-white font-bold w-80 px-7 py-4 bg-dark-green/100 rounded-3xl self-center hover:bg-standard-blue hover:scale-105">Saiba mais</button>
            <button className="text-white font-bold px-10 py-4 bg-dark-green rounded-3xl self-center hover:bg-standard-blue hover:scale-105">Institutos Comunitários no Brasil</button>
          </div>
      </div>

      <div className="mt-20 flex flex-col gap-8">
        <div className="flex justify-center">
          <h4 className="font-bold justify-self-center">Fale Conosco:</h4>
        </div>
          <div className="flex justify-center flex-row gap-20">
            <div className="flex flex-row gap-2"> 
              <img src={mail} alt="Imagem de uma carta genérica"/>
              <a className="font-bold" href="mailto:email@email.com.br?subject=Fortalecimento Comunitário&body=Diga-nos o que precisa">email@email.com.br</a>
            </div>
            <div className="flex flex-row gap-2"> 
              <img src={phone} alt="Imagem de um telefone"/>
              <p className="font-bold">(79) 3223-2159 (Para recados)</p>
            </div>
          </div>
      </div>

      <div className="mt-20 flex flex-col gap-16">
        <Title 
          color="orange-500"
          content="Apoiadores:"
        />
        <div className="flex justify-center flex-row gap-20">
          <img className="" src={idis} alt="Logo da apoiadora IDIS"/>
          <img className="" src={tt} alt="Logo da apoiadora Transformando Territórios"/>
        </div>
      </div>
    </div>
  );
}

export default Community;

