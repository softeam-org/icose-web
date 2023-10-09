import { Columns, Coins, MapPinLine, Hand, HandsPraying, Handshake, Hexagon, UsersFour } from "@phosphor-icons/react";
import Body from "@/components/Body";
import Title from "@/components/Title";
import AccordionItem from "@/components/AccordionItem";

import TransformandoTerritorios from "@/assets/TransformandoTerritorios.png";
import Participantes from "@/assets/MapaFIC_ProgramaTT.jpg";

function Community() {
  return (
    <div className="flex-1 pt-[92px]">
      <Body>
        <section className="flex flex-col gap-12">
          <Title content="Institutos Comunitários" />
          <div className="flex flex-col gap-2">
            <AccordionItem icon={<MapPinLine size={28} />} title="Instituições locais" >
              <p>
                As organizações dedicam-se à melhoria da qualidade de vida de comunidades situadas em uma região geográfica bem delimitada, da qual são originárias e na qual estão estabelecidas.
              </p>
            </AccordionItem>
            <AccordionItem icon={<Handshake size={28} />} title="Provedoras de apoio institucional e técnico às organizações e iniciativas sociais locais" >
              <p>
                Responsáveis por impulsionar o desenvolvimento e a construção de capacidades das organizações da sociedade civil e iniciativas sociais locais, de modo a elevar padrões de operação e garantir o uso responsável e eficiente dos recursos doados.
              </p>
            </AccordionItem>
            <AccordionItem icon={<Hexagon size={28} />} title="Multitemáticas" >
              <p>
                Apoiam e investem em outras organizações da sociedade civil e iniciativas sociais de modo a abranger a diversidade de causas e temas relevantes para a comunidade, seu contexto e suas demandas próprias.
              </p>
            </AccordionItem>
            <AccordionItem icon={<Columns size={28} />} title="Instituições juridicamente estabelecidas, perenes e com visão de longo-prazo" >
              <p>
                Isto é, organizações com foco em sustentabilidade que, a partir da busca pela constituição de fundos de reserva e fundos patrimoniais filantrópicos (os endowments), visam o investimento de longo prazo na comunidade, garantindo autonomia local e a perpetuidade de suas ações.
              </p>
            </AccordionItem>
            <AccordionItem icon={<Coins size={28} />} title="Financiadas por fontes de recursos diversas" >
              <p>
                Buscam construir ao longo do tempo bases diversificadas de captação de recursos, sempre que possível, realizando a captação também junto à própria comunidade, de modo a impulsionar o papel co-investidor dos cidadãos, aumentar o engajamento comunitário e contribuir com a construção de relações baseadas na confiança e transparência, na qual tanto o instituto/fundação comunitária quanto cidadãos compartilham a responsabilidade sobre o território e sua comunidade.
              </p>
            </AccordionItem>
            <AccordionItem icon={<Hand size={28} />} title="Majoritariamente grantmakers" >
              <p>
                Captam, gerenciam e realizam doações de recursos financeiros para organizações sem fins lucrativos e iniciativas sociais do território, que atuam na linha de frente do atendimento às demandas comunitárias, de modo a assegurar a vitalidade do setor social local.
              </p>
            </AccordionItem>
            <AccordionItem icon={<UsersFour size={28} />} title="Representadas por membros da comunidade" >
              <p>
                Possuem instâncias de governança formadas por agentes e cidadãos preocupados com as questões locais que, a partir da sensibilidade e profundo conhecimento do território, são responsáveis por manter a organização, identificar temas prioritários, orientar a alocação eficaz de recursos, bem como defender os interesses da comunidade.
              </p>
            </AccordionItem>
            <AccordionItem icon={<HandsPraying size={28} />} title="Provedoras de serviços para doadores" >
              <p>
                Oferecem serviços adaptados aos interesses e a capacidade de contribuição dos doadores, auxiliando-os a alcançarem seus objetivos filantrópicos. São responsáveis também por fomentar a cultura de doação no território e, potencialmente, são instrumentos poderosos para receber legados." /
              </p>
            </AccordionItem>
          </div>
        </section>
        <div className="pt-12 flex justify-center">
          <img
            src={TransformandoTerritorios}
            alt="Descreve o modelo de operação da transformando territórios"
          />
        </div>
        <section>
          <div className="flex flex-col gap-10 pt-12">
            <Title
              color="#F59E0B"
              content="Institutos Comunitários no Brasil"
            />
            <div className="flex flex-col gap-6 xl:gap-8">
              <p>
                Até pouco tempo atrás, existiam no Brasil apenas três organizações que operavam neste modelo: o Instituto Comunitário Grande Florianópolis, o Tabôa - Desenvolvimento Comunitário e o Instituto Baixada Maranhense.  Porém, desde 2018 o Instituto para o Desenvolvimento do Investimento Social (IDIS), em parceria com a Charles Stewart Mott Foundation, criou o programa Transformando Territórios, que vem fomentando a criação de mais Institutos e Fundações Comunitárias no Brasil.
              </p>
              <img
                src={Participantes}
                alt="Mapa dos participantes do programa, destacado estão: Amazonas, Maranhão, Alagoas, Sergipe, Bahia, Minas Gerais, Espírito Santo, Rio de Janeiro, São Paulo, Santa Cataria e Rio Grande do Sul."
              />
            </div>
          </div>
        </section>
      </Body>
    </div>
  );
}

export default Community;
