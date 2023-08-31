import qrCode from "@/assets//qr-code.svg"
import Title from "@/components/Title"
import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoPix from "@/assets/logo-pix.svg"
import BackgroundWhite from "./BackgroundWhite"


function PixBg() {
  return (
    <div className="flex flex-col w-5/6">
      <div className="flex flex-col gap-10 justify-center mx-[12%]">
        <h1>
          <Title color="#1E3A8A" content="Faça sua doação" />
        </h1>
        <h2 className="text-lg xl:text-xl">
          Todo valor arrecadado será repassado para projetos sociais.
        </h2>
      </div>
      <div className="flex flex-col gap-14 justify-center items-center mx-[12%] mt-10 mb-20">
        <div className="rounded-3xl grid gap-8 xl:gap-16 w-full bg-[#37B4AA] text-white items-center">
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <h1 className="mt-10 text-lg xl:text-xl font-bold">
              DOE AQUI VIA PIX
            </h1>
            <div className="flex flex-rol w-1/4 max-w-[10rem] gap-2 justify-center">
              <img
                className="w-1/2"
                src={logoPix}
                alt="logo do Pix"
              />
              <img
                className="w-1/2"
                src={logoImage}
                alt="logo da icose"
              />
            </div>
            <p className="w-1/2 text-center text-lg xl:text-xl">
              Faça aqui sua doação via PIX para o ICOSE
            </p>
            <img
              className="w-2/5 max-w-[15rem]"
              src={qrCode}
              alt="Qr-code para doações da icose"
            />
            <h1 className="text-lg xl:text-xl font-bold">
              CHAVE PIX
            </h1>
            <BackgroundWhite>
              <p>
                50.310.780/0001-44
              </p>
            </BackgroundWhite>
            <h1 className="text-lg xl:text-xl font-bold">
              CONTA
            </h1>
            <BackgroundWhite>
              <p>
                Banco do Brasil
                <br />
                Agência: 5985-4
                <br />
                C/C: 23.968-2
              </p>
            </BackgroundWhite>
            <div className="mt-10 space-y-4 w-3/4">
              <h1 className="font-bold text-lg xl:text-xl">
                Instruções para realizar transferência PIX:
              </h1>
              <p>
                Com chave pix:
                <br />
                - Se preferir fazer a doação sem escanear,
                <br />
                copie a chave acima e cole na área PIX do seu banco.
                <br />
                <br />
                Com QR CODE:
                <br />
                1 - Abra o app do seu banco
                <br />
                2 - Encontre a área PIX dentro do app do seu banco
                <br />
                3 - Selecione pagar QR CODE ou algo do tipo e escaneie a imagem acima.
                <br />
                4 - Digite o valor que quer doar e confirme a operação conforme instruções na tela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PixBg;