import idis from "@/assets/LOGO-IDIS.png";
import tt from "@/assets/LOGO-TT.png";
import Title from "@/components/Title"

function Supporters() {
  return (
    <div className="flex flex-col gap-8">
      <Title 
        color="#F59E0B"
        content="Apoiadores"
      />
      <div className="flex justify-center flex-col gap-20 sm:flex-row max-lg:gap-8">
        <img src={idis} alt="Logo da apoiadora IDIS"/>
        <img src={tt} alt="Logo da apoiadora Transformando Territórios"/>
      </div>
    </div>
  );
}

export default Supporters;
