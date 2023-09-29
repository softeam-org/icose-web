import Title from "@/components/Title"
import qrCode from "@/assets//qr-code.png"
import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoPix from "@/assets/logo-pix.svg"
import BackgroundWhite from "@/components/Donation/BackgroundWhite"
import { CopySimple } from "@phosphor-icons/react"
import { CheckFat  } from "@phosphor-icons/react"
import React, { useState } from 'react';


function PixBg() {
  const chavePix = "50.310.780/0001-44";
  const [copiado, setCopiado] = useState(false);

  const copiarTextoParaClipboard = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      <Title
        content="Faça sua doação"
      />
      <div className="mt-10  rounded-3xl bg-[#37B4AA] text-white flex flex-col items-center justify-center py-12 gap-3">
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
          CHAVE PIX (CNPJ)
        </h1>
        <BackgroundWhite>
          <div className="flex gap-1 relative">
            <p className="w-32 text-center md:w-full break-normal">
              {chavePix}
            </p>
            <button className={`transition-transform md:tooltip ${copiado ? 'scale-110'  : ''}`}
                    data-tip={copiado ? "Copiado!" : "Clique aqui para copiar a chave Pix." }  
                    onClick={copiarTextoParaClipboard}>
              {copiado ? ( 
                <CheckFat className="text-green-500" />
              ) : (
                <CopySimple />
              )}
            </button>
          </div>
        </BackgroundWhite>
        <h1 className="text-lg xl:text-xl font-bold">
          CONTA
        </h1>
        <BackgroundWhite>
          <p className="w-36 text-center md:w-full break-normal">
            Banco do Brasil
            <br />
            Agência: 5985-4
            <br />
            C/C: 23.968-2
          </p>
        </BackgroundWhite>
        <div className="mt-10 px-12 space-y-4">
          <h1 className="font-extrabold	text-lg lg:text-2xl">
            Instruções para realizar transferência PIX:
          </h1>
          <p className="text-lg lg:text-xl">
            Com chave pix:
            <br />
            - Se preferir fazer a doação sem escanear,
            copie a chave acima e cole na área PIX do seu banco.
            <br />
            <br />
            Com QR CODE:
            <br />
            1 - Abra o app do seu banco.
            <br />
            2 - Encontre a área PIX dentro do app do seu banco.
            <br />
            3 - Escolha 'Pagar com QR Code' e faça a leitura da imagem acima.
            <br />
            4 - Digite o valor que quer doar e confirme a operação conforme instruções na tela.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PixBg;
