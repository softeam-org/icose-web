import Title from "@/components/Title";
import Body from "@/components/Body"
import MemberCard from "@/components/About/MemberCard";
import Transparency from "@/components/About/Transparency";
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
    <div className="bg-background-section pt-[92px]">
      <Body>
        <section className="flex flex-col gap-16">
          <div className="flex flex-col gap-10">
            <Title
              content="Membros do Conselho Administrativo"
            />
            <div className="space-y-4">
              {admList}
            </div>                   
          </div>

          <div className="flex flex-col gap-10">
            <Title
              color="#F59E0B"
              content="Associados"
            />  
            <div className="flex flex-col gap-10">
              <Title
                color="#365314"
                content="Membros do Conselho Fiscal"
                centeredTitle={true}
              />  
              <div className="space-y-4">
                {fiscalCouncilList}
              </div>
            </div>

          </div>  

          <Transparency/>
        </section>
      </Body>
    </div>
  );
}

export default About;

