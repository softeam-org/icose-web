import Body from "@/components/Body";
import AccordionItem from "@/components/AccordionItem";
import OxenteMulher from "@/components/Projects/OxenteMulher";
import MaratonaSolidariedade from "@/components/Projects/MaratonaSolidariedade";
import ConhecendoTerritorio from "@/components/Projects/ConhecendoTerritorio";
import AtividadesSolidarias from "@/components/Projects/AtividadesSolidarias";
import CadaFotografia from "@/components/Projects/CadaFotografia";

function Projects() {
  return (
    <section className="flex-1 pt-[92px]">
      <Body>
        <div className="flex flex-col gap-6">
          <AccordionItem title="Oxente Mulher" bgColor="background-section" textColor="#1e1e2e">
            <OxenteMulher />
          </AccordionItem>

          <AccordionItem title="Maratona da Solidariedade" bgColor="background-section" textColor="#1e1e2e">
            <MaratonaSolidariedade />
          </AccordionItem>

          <AccordionItem title="Atividades Solidárias" bgColor="background-section" textColor="#1e1e2e">
            <AtividadesSolidarias />
          </AccordionItem>

          <AccordionItem title="Conhecendo o Território" bgColor="background-section" textColor="#1e1e2e">
            <ConhecendoTerritorio />
          </AccordionItem>

          <AccordionItem title="Cada Fotografia: Uma história!!" bgColor="background-section" textColor="#1e1e2e">
            <CadaFotografia />
          </AccordionItem>

        </div>
      </Body>
    </section>
  );
}

export default Projects;
