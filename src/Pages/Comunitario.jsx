import NationalCommunity from "@/components/Comunitario/NationalCommunity";
import Title from "@/components/Title";
import SliderC from "@/components/Comunitario/sliderCommunity";
import TransformandoTerritorios from "@/assets/TransformandoTerritorios.png";
import {Columns, Coins, MapPinLine, Hand, HandsPraying, Handshake, Hexagon, UsersFour } from "@phosphor-icons/react";

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
        <SliderC icon={<Columns size={28} />} title="Instituições juridicamente estabelecidas, perenes e com visão de longo-prazo" content="Isto é, organizações com foco em sustentabilidade que, a partir da busca pela constituição de fundos de reserva e fundos patrimoniais filantrópicos (os endowments), visam o investimento de longo prazo na comunidade, garantindo autonomia local e a perpetuidade de suas ações."/>
        <SliderC icon={<Coins size={28} />} title="Financiadas por fontes de recursos diversas" content="Buscam construir ao longo do tempo bases diversificadas de captação de recursos, sempre que possível, realizando a captação também junto à própria comunidade, de modo a impulsionar o papel co-investidor dos cidadãos, aumentar o engajamento comunitário e contribuir com a construção de relações baseadas na confiança e transparência, na qual tanto o instituto/fundação comunitária quanto cidadãos compartilham a responsabilidade sobre o território e sua comunidade."/>
        <SliderC icon={<Hand size={28} />} title="Majoritariamente grantmakers" content="Captam, gerenciam e realizam doações de recursos financeiros para organizações sem fins lucrativos e iniciativas sociais do território, que atuam na linha de frente do atendimento às demandas comunitárias, de modo a assegurar a vitalidade do setor social local."/>
        <SliderC icon={<UsersFour size={28} />} title="Representadas por membros da comunidade" content="Possuem instâncias de governança formadas por agentes e cidadãos preocupados com as questões locais que, a partir da sensibilidade e profundo conhecimento do território, são responsáveis por manter a organização, identificar temas prioritários, orientar a alocação eficaz de recursos, bem como defender os interesses da comunidade."/>
        <SliderC icon={<HandsPraying size={28} />} title="Provedoras de serviços para doadores" content="Oferecem serviços adaptados aos interesses e a capacidade de contribuição dos doadores, auxiliando-os a alcançarem seus objetivos filantrópicos. São responsáveis também por fomentar a cultura de doação no território e, potencialmente, são instrumentos poderosos para receber legados."/>
      </div>
      </section>

      <section>
        <div className="flex flex-col gap-10 xl:gap-14 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
          <img src={TransformandoTerritorios} alt="Descreve o modelo de operação da transformando territórios" />
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
