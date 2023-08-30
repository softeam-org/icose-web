import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoName from "@/assets/LOGO-ICOSE-NAME.svg"
import logoSofteam from "@/assets/LOGO-SOFTEAM.svg"
import { Link } from "react-router-dom";
import { Envelope } from "@phosphor-icons/react";
import { Phone } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-standard-blue">
      <div className="flex md:flex-wrap mx-10 mb-10 justify-between content-center md:mx-20 xl:mx-32 flex-col md:flex-row lg:flex-nowrap xl:flex-nowrap gap-5">
        <div className="font-inter text-white w-auto md:w-full xl:w-80">
          <div className="flex mt-10 gap-4">
            <Link to="/">
              <img src={logoImage} alt="Logo Icose" className="h-20 xl:h-16" />
              <img src={logoName} alt="nome Icose" />
            </Link>
          </div>
          <h1 className="font-Montserrat text-white mt-2 xl:w-80 text-xl xl:text-base">
            INSTITUTO COMUNITÁRIO DE SERGIPE
          </h1>
          <h3 className="mt-4 w-auto md:w-full xl:w-80 text-lg xl:text-base">
            Rua Wilson Barbosa De Melo, 23, Térreo 01,
            Bairro Atalaia - Aracaju/SE
            <br />
            CEP 49037-590
          </h3>
          <h2 className="mt-4 gap-2 flex items-center text-lg xl:text-base">
            <Phone size={32} />  (79) 3223-2159
          </h2>
          <h2 className="flex gap-2 items-center text-lg xl:text-base">
            <Envelope size={32} /> email@email.com
          </h2>
        </div>
        <div className="font-inter text-white mt-7 md:mt-14 xl:mt-14 md:w-42 xl:w-52">
          <h2>
            DESTAQUES
          </h2>
          <div className="mt-7 xl:mt-10">
            <ul>
              <li className="flex items-center gap-2">
                <ArrowRight size={32} /> <Link to="/sobre">Sobre</Link>
              </li>
              <li className="mt-6 flex items-center gap-2">
                <ArrowRight size={32} />  <Link to="/projetos">Projetos</Link>
              </li>
              <li className="mt-6 flex items-center gap-2">
                <ArrowRight size={32} />  <Link to="/comunitario">Comunitário</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-inter text-white mt-7 md:mt-14 xl:mt-14 md:w-64 w-72">
          <h2>TITULO</h2>
          <h3 className="Titulo mt-7 xl:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae nisi at animi facilis ipsum officia,
          </h3>
          <h3 className="Titulo mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae nisi at animi.
          </h3>
        </div>
        <div className="font-inter text-white mt-7 md:mt-14 xl:mt-14 md:w-64 w-72">
          <h2>DOE AQUI</h2>
          <h3 className="Donation mmt-7 xl:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae nisi at animi facilis ipsum officia,
            sed.
          </h3>
          <button className="rounded-lg bg-amber-500 h-14 w-48 shadow-xl mt-7 text-2xl font-bold">
            <Link to="/doacao">Doe Aqui</Link>
          </button>
        </div>
      </div>
      <div className="bg-stone-900">
        <div className="flex font-inter mx-auto md:mx-10 xl:mx-32 text-white text-sm place-content-center h-20 items-center justify-between">
          <h3 className='text-xs xl:text-base mx-2'>
            Copyright © 2023 ICOSE - Instituto Comunitário de Sergipe. CNPJ: 12.345.678/0001-00
          </h3>
          <h3 className="flex items-center text-xs xl:text-base mx-2">
            Desenvolvido por Softeam
            <img src={logoSofteam} alt="Logo Softeam" className="w-1/4 md:w-auto xl:w-auto" />
          </h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer;