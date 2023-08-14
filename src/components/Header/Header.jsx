import NavBar from "@/components/Header/NavBar";
import HeaderLogo from "@/components/Header/Logo";

function Header() {
  return (
    <div className="sticky z-50 inset-x-0 top-0 bg-standard-blue">
      <div className="mx-12 py-4 xl:py-6 flex gap-4 justify-between items-center">
        <HeaderLogo />
        <NavBar />
      </div>
    </div>
  );
}

export default Header;

