import Title from "@/components/Title";
import CollaboratorCard from "@/components/About/CollaboratorCard";
import { User} from "@phosphor-icons/react";
import AssociaCard from "@/components/About/AssociaCard";
import VolunteerCards from "@/components/About/VolunteerCards";


function About() {
  return (
    <div className="bg-background-section w-full">
      <div className="flex items-center justify-center flex-col mx-auto max-w-[110rem] px-12">
        <section className="flex flex-col space-y-20 pt-24 pb-20">
          <Title
            color = "standed-blue."
            content={"Membros do Conselho de Administração:"}
          />
          <div className="space-y-4">
            <CollaboratorCard
              img = {<User size={55} alt="Collaborator"/>}
              text = {"Sandra Kiener é a base motivadora que lidera todos que compõem o Instituto Comunitário de Sergipe. Formada em Psicologia pela Universidade de Genebra e especialista em Gestão do Terceiro Setor e Responsabilidade Social pela Estácio de Sá, em Santa Catarina, retomou o desejo de compartilhar a experiência adquirida ao longo de 35 anos. Sua sensibilidade em contribuir de maneira mais significativa deu origem ao ICOSE."}
            />
            <CollaboratorCard
              img = {<User size={55} alt="Collaborator"/>}
              text = {"Cristine Lenz é apaixonada pela educação e pela natureza. É doutora em Geologia e professora da Universidade Federal de Sergipe desde 2011. Sempre buscou inserir a solidariedade no seu dia a dia e viu no Icose uma forma de iniciar uma transformação no seu território."}
            />
            <CollaboratorCard
              img = {<User size={55} alt="Collaborator"/>}
              text = {"Adriano Cardoso de Andrade é a parte do ICOSE que é ponte entre a criatividade e o planejamento. Formado em Direito e especialista em Magistério Superior, tem o senso de justiça e a perseverança como guia em sua jornada, e suas ações buscam conscientizar sobre a importância da dignidade humana. É Procurador Federal da Advocacia Geral da União desde 2003."}
            />
            <CollaboratorCard
              img = {<User size={55} alt="Collaborator"/>}
              text = {"Sandra Rodrigues é da charmosa Boquim, a eterna “Terra da Laranja” em Sergipe. Tem licenciatura em Letras/Português, é pedagoga e especialista em Língua, Linguística e Literatura. É produtora cultural, escritora, uma ativista cheia de energia em defesa das culturas populares."}
            />
            <CollaboratorCard
              img = {<User size={55} alt="Collaborator"/>}
              text = {"Marco Vieira é jornalista e multiartista que trafega pelas áreas da fotografia, audiovisual e literatura. É amante das artes e das relações humanas. Compreende a vida como um todo que se harmoniza a partir dos bons pensamentos, das boas palavras e das boas ações."}
            />
          </div>                   
        </section>
        <section className="flex flex-col">
          <Title
            color = "#F59E0B"
            content={"Associados"}
            className= ""
          />  
          <div className="w-full flex justify-center mt-12 mb-16">
            <Title
              color = "#365314"
              content={"Membros do Conselho Fiscal"}
              centeredTitle ={"center"}
              className=""
            />  
          </div>
          <div className="space-y-32 mb-24">
            <AssociaCard
              img = {<User size={55} alt="Associate"/>}
              text={"Andréa Paula Cajazeira, economista, funcionária pública, mãe, esposa e em busca constante de crescimento em valores, virtudes e sabedoria."}
            />
              <AssociaCard
              img = {<User size={55} alt="Associate"/>}
              text={"Jeannine Almeida de Sousa Administradora, amante do tema finanças, gosta de ajudar as pessoas, procura uma vida um pouco mais justa e sustentável para o mundo, ama família."}
            />
              <AssociaCard
              img = {<User size={55} alt="Associate"/>}
              text={"Mônica Jesus dos Santos, mãe, filha e irmã Empresaria Contábil, contadora, especialista em Auditoria e Holding, membro da comissão de estudo contábil aplicado ao terceiro setor do CRC/SE, ama a vida e tudo que ela ensina."}
            />
          </div>
        </section>
        <section className="w-full mb-28">
          <div className="mb-8">
            <Title
              color = "#365314"
              content={"Voluntários"}
              centeredTitle ={"true"}
            /> 
          </div>
          <div>
            <VolunteerCards
              img = {<User size={55} alt="Voluntary"/>}
              text={"Hugo"}
            />
          </div>
        </section>                       
      </div>
    </div>
  );
};

export default About;
