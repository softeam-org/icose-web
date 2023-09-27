import NavBar from "@/components/Header/NavBar";
import HeaderLogo from "@/components/Header/Logo";

function Header() {
  return (
    <div className="fixed z-50 inset-x-0 top-0 bg-standard-blue">
      <div className="sm:mx-12 mx-6 py-3 flex gap-4 justify-between items-center">
        <HeaderLogo />
        <NavBar />
      </div>
    </div>
  );
}

export default Header;

