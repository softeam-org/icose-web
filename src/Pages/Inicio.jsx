import map from "@/assets/map.svg"
import Logo_Icose_2 from "@/assets/Logo_Icose_2.svg"
import Cards from "@/components/Inicio/Cards"
import Presentation from "@/components/Inicio/Presentation"
import ContactUs from "@/components/Inicio/ContactUs"
import Community from "@/components/Inicio/Community";
import News from "@/components/Inicio/News"

function Home() {
  return (
    <div className="flex-1 text-2xl">
      <section className="bg-[#2C3E50]">
        <div className="flex flex-col gap-12 pt-20 items-center justify-between mx-auto max-w-[100rem] xl:flex-row xl:pt-0">
          <div className="flex items-center justify-center w-full">
            <img
              className=""
              src={Logo_Icose_2}
              alt="Logo Icose"
            />
          </div>
          <div className="flex items-center justify-center w-full">
            <img
              className="h-[480px] xl:h-auto"
              src={map}
              alt="Mapa de Sergipe"
            />
          </div>
        </div>
      </section>
      
      

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

      <section className="flex justify-center flex-col	bg-background-section items-center py-8">
        <News />
      </section>
    </div>
  );
}

export default Home;

