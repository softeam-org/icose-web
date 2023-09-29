import womenWorkin from "@/assets/women-working.svg";
import PixBg from "@/components/Donation/PixBg";
import Body from "@/components/Body";

function Donation() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-screen ">
        <img
          className="object-cover w-full h-full"
          src={womenWorkin}
          alt="Mulher trabalhando em serviço comunitário"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <Body>
            <p className="text-white text-2xl md:text-4xl lg:text-4xl xl:text-6xl	font-bold tracking-wide leading-tight">
              Todo valor arrecadado no território em 2023 será integralmente repassado para iniciativas selecionadas através do mapeamento e/ou edital.
            </p>
          </Body>
        </div>
      </div>

      <Body>
        <PixBg/>
      </Body>

    </div>
  );
}

export default Donation;
