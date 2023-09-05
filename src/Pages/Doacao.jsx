import womenWorkin from "@/assets/women-working.svg"
import PixBg from "@/components/Donation/PixBg";

function Donation() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-screen mb-24">
        <img
          className="object-cover w-full h-full"
          src={womenWorkin}
          alt="Mulher trabalhando em serviço comunitário"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl xl:text-6xl	font-bold px-12 mx-auto max-w-7xl h-4/6 py-10 tracking-wide leading-tight">
            Todo valor arrecadado no território em 2023 será integralmente repassado para iniciativas selecionadas através do mapeamento e/ou edital.
          </p>
        </div>
      </div>
      <PixBg/>
    </div>
  );
}

export default Donation;