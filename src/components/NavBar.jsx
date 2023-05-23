import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="my-auto select-none">
      <ul className="flex gap-5 font-inter text-white text-xl">
        <li className="nav-link"> 
          <Link to="/">Início</Link>
        </li>
        <li className="nav-link"> 
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className="nav-link">
          <Link to="/editais">Editais</Link>
        </li>
        <li className="nav-link">
          <Link to="/transferencias">Transferências</Link>
        </li>
        <li className="nav-link">
          <Link to="/parceiros">Parceiros</Link>
        </li>
        <li className="nav-link">
          <Link to="/doacao">Doe Aqui</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

