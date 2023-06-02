function Overlay({ isActive, onClick }) {
  const display = isActive ? "block " : "hidden ";
  return <div onClick={onClick} className={display + "xl:hidden inset-0 fixed w-screen h-screen bg-black opacity-60 z-10"}></div>;
}

export default Overlay;

