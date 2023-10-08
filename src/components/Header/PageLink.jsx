import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function PageLink({name, route, onClick}) {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <li onClick={onClick} key={name} className={`relative cursor-pointer after:content-[''] after:absolute after:bottom-[0.1rem] after:left-0 after:border-b after:border-standard-blue xl:after:border-white after:border-solid after:w-0 after:transition-[width] after:pointer-events-none ${isActive ? "after:w-full" : "after:hover:w-full"}`}>
      <Link to={route}>{name}</Link>
    </li>
  );
}

export default PageLink;

