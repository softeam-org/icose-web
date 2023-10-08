import React, { useState } from 'react';
import Title from "@/components/Title"
import { CopySimple, CheckFat } from "@phosphor-icons/react"
import { icose } from "data/icose";

import qrCode from "@/assets//qr-code.png"
import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoPix from "@/assets/logo-pix.svg"

function PixBg() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(icose.cnpj);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col text-lg xl:text-xl">
      <Title
        content="Colabore!"
      />

      <div className="mt-10 rounded-3xl bg-[#37B4AA] text-white flex flex-col items-center justify-center px-6 sm:px-12 py-8 sm:py-16 gap-3">
        <h1 className="font-bold">
          DOE AQUI VIA PIX
        </h1>

        <div className="flex max-w-[10rem] gap-2">
          <img
            src={logoPix}
            alt="Logo do Pix"
          />
          <img
            src={logoImage}
            alt="Logo do ICOSE"
          />
        </div>

        <p className="text-center">
          Faça aqui sua doação via PIX para o <strong>ICOSE</strong>
        </p>

        <img
          className="w-1/2 max-w-[20rem]"
          src={qrCode}
          alt="QR-code para doações da icose"
        />

        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold">
            CHAVE PIX (CNPJ)
          </h1>

          <div className="bg-white rounded-3xl text-sm md:text-base xl:text-lg text-black font-black py-2 px-8">
            <div className="flex gap-3 items-center">
              <p className="text-center break-normal">
                {icose.cnpj}
              </p>
              <button className={`transition-transform md:tooltip ${copied ? 'scale-110' : ''}`}
                      data-tip={copied ? "Copiado!" : "Copiar a chave Pix" }  
                      onClick={copyToClipboard}>
                {copied ? <CheckFat className="text-green-500" /> : <CopySimple />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold">
            CONTA
          </h1>

          <div className="bg-white rounded-3xl text-sm md:text-base xl:text-lg text-black font-black py-2 px-8">
            <div className="flex flex-col items-center break-normal">
              <span>Banco do Brasil</span>
              <span>Agência: 5985-4</span>
              <span>C/C: 23.968-2</span>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <h1 className="font-black	text-lg lg:text-2xl">
            Instruções para realizar transferência PIX:
          </h1>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3>Com QR CODE:</h3>
              <ol className="list-decimal px-8">
                <li>Abra o app do seu banco.</li>
                <li>Encontre a área PIX dentro do app do seu banco.</li>
                <li>Escolha 'Pagar com QR Code' e faça a leitura da imagem acima.</li>
                <li>Digite o valor que quer doar e confirme a operação conforme instruções na tela.</li>
              </ol> 
            </div>

            <div className="space-y-1">
              <h3>Com chave pix:</h3>
              <ul className="list-disc px-8">
                <li>Se preferir fazer a doação sem escanear, copie a chave acima e cole na área PIX do seu banco.</li>
              </ul> 
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PixBg;

