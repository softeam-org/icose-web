import map from "@/assets/map.svg"
import Logo_Icose_2 from "@/assets/Logo_Icose_2.svg"

function Banner() {
  return (
    <section className="bg-[#2C3E50]">
      <div className="flex flex-col pt-0  items-center h-auto md:pt-0 md:flex-row md:h-[70vh]">
        <div className="pl-[1%] pr-[15%] hidden md:flex items-center justify-center w-full">
          <img
            className=""
            src={Logo_Icose_2}
            alt="Logo Icose"
          />
        </div>
        <div className="flex items-center justify-center md:h-full w-full ">
          <img
            className="w-full max-h-full md:w-auto md:relative md:z-10 md:right-[10vh] md:top-[10vh] md:rounded-tl-[20%] md:rounded-br-[15%]" 
            src={map}
            alt="Mapa de Sergipe" 
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;