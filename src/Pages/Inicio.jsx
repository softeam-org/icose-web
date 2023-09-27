import Title from "@/components/Title"
import Banner from "@/components/Inicio/Banner"
import Cards from "@/components/Inicio/Cards"
import Presentation from "@/components/Inicio/Presentation"
import ContactUs from "@/components/Inicio/ContactUs"
import Community from "@/components/Inicio/Community";

function Home() {
  return (
    <div className="flex-1 text-2xl">
      <Banner />

      <section className="pt-20 bg-background-section">
        <Title
          centeredTitle={true}
          content="Conheça o ICOSE"
        />

        <div className="flex flex-col gap-10 xl:gap-20 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
          <Cards />
          <Presentation />
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-16 pt-10 pb-10 xl:pb-20 mx-auto max-w-[100rem] px-12">
          <Community />
        </div>
      </section>
    </div>
  );
}

export default Home;

