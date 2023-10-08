import Title from "@/components/Title";
import Body from "@/components/Body";
import Banner from "@/components/Inicio/Banner";
import Cards from "@/components/Inicio/Cards";
import Carousel from "@/components/Inicio/Carousel/Carousel";
import Presentation from "@/components/Inicio/Presentation"; 
import Community from "@/components/Inicio/Community";

function Home() {
  return (
    <div className="flex-1">
      <Banner />

      <section className="bg-background-section">
        <Body>
          <Title
            centeredTitle={true}
            content="Conheça o ICOSE"
          />

          <div className="flex flex-col gap-10 pt-10">
            <Cards />
            <Presentation />
          </div>

        </Body>
      </section>
      <Body>
        <Community />
      </Body>
      <section className="bg-background-section">
        <Carousel />
      </section>

    </div>
  );
}

export default Home;

