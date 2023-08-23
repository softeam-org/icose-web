import qrCode from "@/assets//qr-code.svg"
import Title from "@/components/Title"
import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoPix from "@/assets/logo-pix.svg"
import BackgroundWhite from "@/components/backgroundWhite"
import TextWithLineBreaks from "@/components/TextWithLineBreaks"


function PixBg() {
  return (
    <div className="flex flex-col gap-10 xl:gap-10 pb-10 pt-10 xl:pt-20 max-w-[100rem] px-10 xl:px-52">
      <h1>
        <Title color="#1E3A8A" content="Faça sua doação" />
      </h1>
      <h2 className="text-lg">
        Todo valor arrecadado será repassado para projetos sociais.
      </h2>
      <div className="relative rounded-3xl grid gap-8 xl:gap-16 min-[800px] w-full h-auto bg-[#37B4AA] text-white">
        <div className="flex flex-col items-center justify-center min-[800px] py-8 gap-3">
          <h1 className="mt-10 text-lg font-bold mr-3">
            DOE AQUI VIA PIX
          </h1>
          <div className="flex flex-rol mr-2">
            <img
              className="h-20 xl:h-16"
              src={logoPix}
              alt="logo do Pix"
            />
            <img
              className="h-20 xl:h-16"
              src={logoImage}
              alt="logo da icose"
            />
          </div>
          <p>
            Faça aqui sua doação via PIX para o ICOSE
          </p>
          <img
            className="w-52 h-52 m"
            src={qrCode}
            alt="Qr-code para doações da icose"
          />
          <h1 className="text-lg font-bold">
            CHAVE PIX
          </h1>
          <BackgroundWhite>
            <p>
              50.310.780/0001-44
            </p>
          </BackgroundWhite>
          <h1 className="text-lg font-bold">
            CONTA
          </h1>
          <BackgroundWhite>
            <TextWithLineBreaks
              text={'Banco do Brasil\nAgência: 5985-4\nC/C: 23.968-2'}
            />
          </BackgroundWhite>
          <div className="mt-10 space-y-4 w-3/4">
            <h1 className="font-bold text-xl">
              Instruções para realizar transferência PIX:
            </h1>
            <TextWithLineBreaks
              classText={'text-base leading-6'}
              text={'Com chave pix:\n- Se preferir fazer a doação sem escanear, copie a chave acima e cole na área PIX do seu banco.'}
            />
            <TextWithLineBreaks
              classText={'text-base leading-6'}
              text={'Com QR CODE:\n1 - Abra o app do seu banco\n2 - Encontre a área PIX dentro do app do seu banco\n3 - Selecione pagar QR CODE ou algo do tipo e escaneie a imagem acima.\n4 - Digite o valor que quer doar e confirme a operação conforme instruções na tela.'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PixBg;