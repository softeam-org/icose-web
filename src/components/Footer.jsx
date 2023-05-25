import logoImage from "../assets/LOGO-ICOSE.svg"
import logoName from "../assets/LOGO-ICOSE-NAME.svg"
import logoSofteam from "../assets/LOGO-SOFTEAM.svg"
import tel from "../assets/tel.svg"
import email from "../assets/email.svg"
import arrow from "../assets/arrow-right.svg"

function Footer() {
  return (
    <footer className="bg-standard-blue">
      <div className="flex mx-10 mb-10 xl:mx-32 flex-col xl:flex-row">
        <div className="font-inter text-white w-2/5">
          <div className="flex mt-7 gap-4">
            <img src={logoImage} alt="Logo Icose" className="h-20 xl:h-16"/>
            <img src={logoName} alt="nome Icose"/>
          </div>
          <h1 className="font-Montserrat text-white w-96 xl:w-80 text-xl xl:text-base">
            INSTITUTO COMUNITÁRIO DE SERGIPE
          </h1>
          <h3 className="mt-4 w-96 xl:w-80 text-lg xl:text-base">
            Rua Wilson Barbosa De Melo, 23, Térreo 01,
            Bairro Atalaia - Aracaju/SE
            <br/>
            CEP 49037-590
          </h3>
          <h2 className="mt-4 gap-2 flex items-center text-lg xl:text-base">
            <img src={tel} alt="Simbolo Telefone"/>  (79) 3223-2159
          </h2>
          <h2 className="flex gap-2 items-center text-lg xl:text-base">
            <img src={email} alt="Simbolo Email"/> email@email.com
          </h2>
        </div>
        <div className="font-inter text-white mt-7 xl:mt-14 w-80">
          <div className="Destaques">
            <h2>
              DESTAQUES
            </h2>
            <div className="mt-7 xl:mt-10">
              <ul>
                <li className="flex items-center">
                  <img src={arrow} alt="flecha apontando para direita"/> Editais
                </li>
                <li className="mt-4 xl:mt-7 flex items-center">
                  <img src={arrow} alt="flecha apontando para direita"/> Parceiros
                </li>
                <li className="mt-4 xl:mt-7 flex items-center">
                  <img src={arrow} alt="flecha apontando para direita"/> Governança
                </li>
                <li className="mt-4 xl:mt-7 flex items-center">
                  <img src={arrow} alt="flecha apontando para direita"/> Transparência
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="font-inter text-white mt-7 xl:mt-14  w-72">
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
        <div className="font-inter text-white mt-10 xl:mt-14 w-72 ">
          <h2>DOE AQUI</h2>
          <h3 className="Donation mmt-7 xl:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Beatae nisi at animi facilis ipsum officia, 
            sed.
          </h3>
          <button className="rounded-lg bg-amber-500 h-14 w-48 shadow-xl mt-7 text-2xl font-bold">
            DOE AQUI
          </button>
        </div>
      </div>
      <div className="flex bg-stone-900 h-20 font-inter text-white text-sm place-content-center items-center justify-around">
        <h3 className='text-xs xl:text-base'>
          Copyright © 2023 ICOSE - Instituto Comunitário de Sergipe. CNPJ: 12.345.678/0001-00
        </h3>
        <h3 className="flex w-64 items-center text-xs xl:text-base">
          Desenvolvido por Softeam <img src={logoSofteam} alt="Logo Softeam"/> 
        </h3>
      </div>
    </footer>
  ) 
}
  
export default Footer;

