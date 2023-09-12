import map from "@/assets/map.svg"
import Logo_Icose_2 from "@/assets/Logo_Icose_2.svg"

function Banner() {
  return (
    <section className="bg-[#2C3E50]">
      <div className="flex flex-col gap-10 pt-28 sm:px-10 items-center h-auto md:flex-row sm:h-[100vh]">
        <div className="hidden sm:flex items-center justify-center w-full">
          <img
            className=""
            src={Logo_Icose_2}
            alt="Logo Icose"
          />
        </div>
        <div className="flex items-center sm:py-6 justify-center sm:h-full w-full ">
          <img
            className="w-full max-h-full sm:w-auto sm:relative sm:z-10 sm:rounded-tl-[20%] sm:rounded-br-[15%]" 
            src={map}
            alt="Mapa de Sergipe" 
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;
