import Banner from "@/components/Inicio/Banner"
import Cards from "@/components/Inicio/Cards"
import Presentation from "@/components/Inicio/Presentation"
import ContactUs from "@/components/Inicio/ContactUs"
import Community from "@/components/Inicio/Community";

function Home() {
  return (
    <div className="flex-1 text-2xl">
      <Banner />

      <section className="bg-background-section">
        <h2 className="flex w-full pt-20 font-semibold text-xl justify-center">
          Conheça a Icose
        </h2>
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

