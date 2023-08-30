// import qrCode from "@/assets//qr-code.svg"
import Title from "@/components/Title"
// import logoImage from "@/assets/LOGO-ICOSE.svg"
// import logoPix from "@/assets/logo-pix.svg"
// import BackgroundWhite from "@/components/backgroundWhite"


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
          {/* <div className="flex flex-rol gap-2 mr-2">
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
            <p>
              Banco do Brasil
              <br/>
              Agência: 5985-4 
              <br/>
              C/C: 23.968-2
            </p>
          </BackgroundWhite> */}
          <div className="mt-10 space-y-4 w-3/4">
            <h1 className="font-bold text-xl">
              Instruções para realizar transferência PIX:
            </h1>
            <p>
              Com chave pix: 
              <br/>
              - Se preferir fazer a doação sem escanear,
              <br/> 
              copie a chave acima e cole na área PIX do seu banco. 
              <br/>
              <br/>
              Com QR CODE: 
              <br/>
              1 - Abra o app do seu banco 
              <br/>
              2 - Encontre a área PIX dentro do app do seu banco
              <br/>
              3 - Selecione pagar QR CODE ou algo do tipo e escaneie a imagem acima.
              <br/>
              4 - Digite o valor que quer doar e confirme a operação conforme instruções na tela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PixBg;