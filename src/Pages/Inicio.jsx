import Title from "@/components/Title"
import Body from "@/components/Body"
import Banner from "@/components/Inicio/Banner"
import Cards from "@/components/Inicio/Cards"
import Presentation from "@/components/Inicio/Presentation"
import Community from "@/components/Inicio/Community";

function Home() {
  return (
    <div className="flex-1 text-2xl">
      <Banner />

      <section className="bg-background-section">
        <Body>
          <Title
            centeredTitle={true}
            content="Conheça o ICOSE"
          />

          <div className="flex flex-col gap-10 xl:gap-20 pt-10 xl:pt-20">
            <Cards />
            <Presentation />
          </div>

        </Body>
      </section>

      <Body>
        <Community />
      </Body>

    </div>
  );
}

export default Home;

