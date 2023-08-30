import womenWorkin from "@/assets/women-working.svg"
import PixBg from "@/components/Donation/PixBg";



function Donation() {
  return (
    <div className="flex flex-wrap flex-col">
      <div className="relative">
        <img
          className="object-cover w-[640px] h-[320px] sm:w-[1024px] sm:h-[512px] lg:w-[1280px] lg:h-[640px] xl:w-full xl:h-[40rem]"
          src={womenWorkin}
          alt="Mulher trabalhando em serviço comunitário"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 xl:w-full xl:h-[40rem]">
          <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-6xl	font-bold px-6 w-3/4 h-4/6 tracking-wide xl:leading-tight">
            Todo valor arrecadado no território em 2023 será integralmente repassado para iniciativas selecionadas através do mapeamento e/ou edital.
          </p>
        </div>
      </div>
      <PixBg/>
    </div>
  );
}

export default Donation;