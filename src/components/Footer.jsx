import Supporters from "@/components/Supporters";
import Body from "@/components/Body"
import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoName from "@/assets/LOGO-ICOSE-NAME.svg"
import logoSofteam from "@/assets/LOGO-SOFTEAM.svg"
import { icose } from "data/icose";
import { Link } from "react-router-dom";
import { Envelope } from "@phosphor-icons/react";
import { Phone } from "@phosphor-icons/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";

function Footer() {
  return (
    <div>
      <Body>
        <Supporters />
      </Body>
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
              <Phone size={32} />  
              <span>{icose.phone}</span>
            </h2>
            <h2 className="flex gap-2 items-center text-lg xl:text-base">
              <Envelope size={32} />
              <a href={`mailto:${icose.email}?body=Diga-nos o que precisa`}>{icose.email}</a>
            </h2>
            <h2 className="flex gap-2 items-center text-lg xl:text-base">
              <InstagramLogo size={32} />
              <a href={`https://www.instagram.com/institutocomunitariodesergipe/`} target="_blank">{icose.instagram}</a>
            </h2>
          </div>
          <div className="font-inter text-white mt-7 md:mt-14 xl:mt-14 md:w-42 xl:w-52">
            <h2 className="font-bold">
              DESTAQUES
            </h2>
            <div className="mt-7 xl:mt-10 ">
              <ul>
                <li className="flex items-center gap-2">
                  <ArrowRight size={32} /> <Link to="/sobre">
                    <p className="relative text-dec cursor-pointer after:content-[''] after:absolute after:bottom-[0.1rem] after:left-0 after:border-b after:border-standard-blue xl:after:border-white after:border-solid after:w-0 after:transition-[width] after:pointer-events-none after:hover:w-full">
                      Sobre
                    </p>
                  </Link>
                </li>
                <li className="mt-6 flex items-center gap-2">
                  <ArrowRight size={32} />  <Link to="/projetos">
                    <p className="relative text-dec cursor-pointer after:content-[''] after:absolute after:bottom-[0.1rem] after:left-0 after:border-b after:border-standard-blue xl:after:border-white after:border-solid after:w-0 after:transition-[width] after:pointer-events-none after:hover:w-full">
                      Projetos
                    </p>
                  </Link>
                </li>
                <li className="mt-6 flex items-center gap-2">
                  <ArrowRight size={32} />
                  <Link to="/comunitario">
                    <p className="relative text-dec cursor-pointer after:content-[''] after:absolute after:bottom-[0.1rem] after:left-0 after:border-b after:border-standard-blue xl:after:border-white after:border-solid after:w-0 after:transition-[width] after:pointer-events-none after:hover:w-full">
                      Comunitário
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="font-inter text-white mt-7 md:mt-14 xl:mt-14 md:w-64 w-72"> */}
          {/*   <h2 className="font-bold"> */}
          {/*     TITULO */}
          {/*   </h2> */}
          {/*   <h3 className="Titulo mt-7 xl:mt-10"> */}
          {/*     Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          {/*     Beatae nisi at animi facilis ipsum officia, */}
          {/*   </h3> */}
          {/*   <h3 className="Titulo mt-4"> */}
          {/*     Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
          {/*     Beatae nisi at animi. */}
          {/*   </h3> */}
          {/* </div> */}

          <div className="font-inter text-white mt-7 md:mt-14 xl:mt-14 md:w-64 w-72">
            <h2 className="font-bold">
              DOE AQUI
            </h2>
            <h3 className="Donation mmt-7 xl:mt-10">
            O valor arrecadado no território será repassado para iniciativas selecionadas através do mapeamento e/ou edital.
            </h3>
            <button className="rounded-lg bg-amber-500 hover:bg-amber-600 h-14 w-48 shadow-xl mt-7 text-2xl font-bold transition duration-300 ease-in-out">
              <Link to="/doacao">Doe Aqui</Link>
            </button>
          </div>
        </div>

        <div className="bg-stone-900">
          <div className="flex flex-col justify-arround gap-5 md:flex-row font-inter mx-auto mx-5 md:mx-20 xl:mx-32 text-white text-sm place-content-center h-32 md:h-20 items-center md:justify-between">
            <h3 className='text-xs xl:text-base mx-2 text-center w-auto'>
              Copyright © 2023 ICOSE - Instituto Comunitário de Sergipe. CNPJ: {icose.cnpj}
            </h3>
            <h3 className="flex flex-row items-center text-center w-auto text-xs xl:text-base mx-2">
              Desenvolvido por Softeam
              <img src={logoSofteam} alt="Logo Softeam" className="w-min-[20rem] w-auto" />
            </h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
