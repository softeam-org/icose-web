import { useState, useEffect } from "react";
import logoImage from "@/assets/LOGO-ICOSE.svg";
import logoName from "@/assets/LOGO-ICOSE-NAME.svg";
import { useLocation } from "react-router-dom";

function Logo() { 
  const location = useLocation();
  const [isOnTop, setIsOnTop] = useState(true);
  const handleScroll = () => {
    const scroll = window.scrollY;
    scroll < 512 ? setIsOnTop(true) : setIsOnTop(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex gap-4">
      <img src={logoImage} alt="Logo da ICOSE" />
      <div className="flex flex-col justify-center items-start">
        <img src={logoName} alt="ICOSE" />
        <span className={"text-white font-montserrat invisible opacity-0 h-0 transition-[height, opacity, visibility] duration-500 ease-in-out" + ((isOnTop && location.pathname == '/') ? "" : " sm:h-[1.5rem] sm:visible sm:opacity-100")}>INSTITUTO COMUNITÁRIO DE SERGIPE</span>
      </div>
    </div>
  ); 
}

export default Logo;

