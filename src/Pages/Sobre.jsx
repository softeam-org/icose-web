import Title from "@/components/Title";
import MemberCard from "@/components/About/Cards/MemberCard";
import Transparency from "@/components/About/Transparency/Transparency";
import { administrators } from "data/administrators";
import { fiscalCouncil } from "data/fiscalCouncil";

const admList = administrators.map(e => {
  return <MemberCard
    key={e.name}
    name={e.name}
    text={e.description}
  />
});

const fiscalCouncilList = fiscalCouncil.map(e => {
  return <MemberCard
    key={e.name}
    name={e.name}
    text={e.description}
  />
});

function About() {
  return (
    <div className="bg-background-section w-full">
      <div className="py-10 px-12 flex flex-col gap-16 items-center justify-center mx-auto max-w-[80rem]">
        <section className="flex flex-col gap-10">
          <Title
            content="Membros do Conselho Administrativo"
          />
          <div className="space-y-4">
            {admList}
          </div>                   
        </section>

        <section className="flex flex-col gap-10">
          <Title
            color="#F59E0B"
            content="Associados"
          />  
          <section className="flex flex-col gap-10">
            <Title
              color="#365314"
              content="Membros do Conselho Fiscal"
              centeredTitle={true}
            />  
            <div className="space-y-4">
              {fiscalCouncilList}
            </div>
          </section>

        </section>  

        <Transparency/>
      </div>
    </div>
  );
}

export default About;

