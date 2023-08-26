import { Link } from "react-router-dom";

function PageLink({name, route, onClick}) {
  return (
    <li onClick={onClick} key={name} className="relative text-dec cursor-pointer after:content-[''] after:absolute after:bottom-[0.1rem] after:left-0 after:border-b after:border-standard-blue xl:after:border-white after:border-solid after:w-0 after:transition-[width] after:pointer-events-none after:hover:w-full">
      <Link to={route}>{name}</Link>
    </li>
  );
}

export default PageLink;

