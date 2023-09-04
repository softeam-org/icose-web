import map from "@/assets/map.svg"
import Logo_Icose_2 from "@/assets/Logo_Icose_2.svg"

function Banner() {
  return (
    <section className="bg-[#2C3E50]">
      <div className="flex flex-col pt-20 items-center xl:flex-row xl:pt-0 h-screen">
        <div className="flex items-center justify-center w-full">
          <img
            className=""
            src={Logo_Icose_2}
            alt="Logo Icose"
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <img
            className="h-full"
            src={map}
            alt="Mapa de Sergipe"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;