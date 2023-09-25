import NationalCommunity from "@/components/Comunitario/NationalCommunity";
import Title from "@/components/Title";
import SliderC from "@/components/Comunitario/sliderCommunity";
import { MapPinLine, Handshake, Hexagon } from "@phosphor-icons/react";

function Community() {
  return (
    <div className="flex-1 text-2xl pb-24">

      <section>
      <div className="flex flex-col gap-10 xl:gap-14 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
        <Title 
        color="standard-blue"
        content="Institutos Comunitários"
        />
        <SliderC icon={<MapPinLine size={28} />} title="Instituições locais" content="As organizações dedicam-se à melhoria da qualidade de vida de comunidades situadas em uma região geográfica bem delimitada, da qual são originárias e na qual estão estabelecidas."/>
        <SliderC icon={<Handshake size={28} />} title="Provedoras de apoio institucional e técnico às organizações e iniciativas sociais locais" content="Responsáveis por impulsionar o desenvolvimento e a construção de capacidades das organizações da sociedade civil e iniciativas sociais locais, de modo a elevar padrões de operação e garantir o uso responsável e eficiente dos recursos doados.
        "/>
        <SliderC icon={<Hexagon size={28} />} title="Multitemáticas" content="Apoiam e investem em outras organizações da sociedade civil e iniciativas sociais de modo a abranger a diversidade de causas e temas relevantes para a comunidade, seu contexto e suas demandas próprias."/>
        <SliderC icon="" title="" content=""/>
        <SliderC icon="" title="" content=""/>
      </div>
      </section>

      <section>
        <div className="flex flex-col gap-10 xl:gap-14 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
        <Title 
        color="#F59E0B"
        content="Institutos Comunitários no Brasil"
        />
          < NationalCommunity />
        </div>
      </section>    

    </div>        
  );
}

export default Community;
