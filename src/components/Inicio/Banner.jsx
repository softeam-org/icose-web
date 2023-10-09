import map from "@/assets/map.svg"
import Logo_Icose_2 from "@/assets/Logo_Icose_2.svg"

function Banner() {
  return (
    <section className="bg-[#2C3E50]">
      <div className="flex gap-10 pt-[92px] px-12 items-center lg:h-[75vh]">
        <div className="hidden md:flex items-center justify-center flex-1">
          <img
            src={Logo_Icose_2}
            alt="Logo Icose"
          />
        </div>
        <div className="flex items-center justify-center py-6 flex-1">
          <img
            className="max-h-[55vh] rounded-tl-[20%] rounded-br-[20%]" 
            src={map}
            alt="Mapa de Sergipe" 
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;
