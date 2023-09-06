import map from "@/assets/map.svg"
import Logo_Icose_2 from "@/assets/Logo_Icose_2.svg"

function Banner() {
  return (
    <section className="bg-[#2C3E50]">
      <div className="flex flex-col pt-20 items-center xl:flex-row xl:pt-0 h-[70vh]">
        <div className="flex items-center justify-center w-full">
          <img
            className=""
            src={Logo_Icose_2}
            alt="Logo Icose"
          />
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="h-full xl:h-[70vh] xl:relative xl:z-10 xl:right-[10vh] xl:top-[10vh] xl:rounded-tl-[8rem] xl:rounded-br-[8rem]" 
            src={map}
            alt="Mapa de Sergipe" 
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;