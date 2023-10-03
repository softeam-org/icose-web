import Body from "@/components/Body";
import OxenteMulher from "@/components/Projects/Contents/OxenteMulher";
import MaratonaSolidariedade from "@/components/Projects/Contents/MaratonaSolidariedade";
import ConhecendoTerritorio from "@/components/Projects/Contents/ConhecendoTerritorio";
import AtividadesSolidarias from "@/components/Projects/Contents/AtividadesSolidarias";

function Projects() {
  return (
    <section className="bg-background-section flex-1 pt-[92px]">
      <Body>
        <div className="flex flex-col gap-8 xl:gap-8 ">
          <OxenteMulher />
          <MaratonaSolidariedade />
          <AtividadesSolidarias />
          <ConhecendoTerritorio />
        </div>
      </Body>
    </section>
  );
}

export default Projects;
