import logoImage from "@/assets/LOGO-ICOSE.svg"
import logoName from "@/assets/LOGO-ICOSE-NAME.svg"

function Logo() {
  return (
    <div className="flex gap-4">
      <img src={logoImage} alt="Logo da ICOSE" />
      <div className="flex flex-col items-start">
        <img src={logoName} alt="ICOSE" />
        <span className="text-white font-montserrat">INSTITUTO COMUNITÁRIO DE SERGIPE</span>
      </div>
    </div>
  );

}

export default Logo;

