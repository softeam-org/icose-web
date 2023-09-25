import Title from "@/components/Title";

function Transparency() {
  return(
    <div className="flex flex-col space-y-10">
      <Title
      color = "#365314"
      content={"Transparência"}
      />  
      <div className="space-y-5">
        <p className="text-xl">Transparência é um dos valores do ICOSE. Acreditamos que prestações de contas claras e acessíveis contribuem para a  construção de relações duradouras baseadas na confiança e credibilidade.</p>
        <p className="text-xl">Não basta ser honesto, temos que mostrar que somos honestos!</p>
        <p className="text-xl">Demonstrativos financeiros e de atividades serão postados aqui.</p>
      </div>
  </div>
  );
}
export default Transparency;
