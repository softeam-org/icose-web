import logoImage from "../assets/LOGO-ICOSE.svg"
import logoName from "../assets/LOGO-ICOSE-NAME.svg"
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <div className="sticky inset-x-0 top-0 bg-standard-blue">
      <div className="mx-12 py-7 flex justify-between">
        <div className="flex gap-4">
          <img src={logoImage} alt="Logo da ICOSE" />
          <div className="flex flex-col items-start">
            <img src={logoName} alt="ICOSE" />
            <span className="text-white font-montserrat">INSTITUTO COMUNITÁRIO DE SERGIPE</span>
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

