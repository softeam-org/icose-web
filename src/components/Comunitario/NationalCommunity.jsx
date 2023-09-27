import Participantes from "@/assets/MapaFIC_ProgramaTT.png";


function NationalCommunity() {
  return (
    <div className="flex flex-col gap-6 xl:gap-8 text-black"> 
        <p className="font-bold ">
          Até pouco tempo atrás, existiam no Brasil apenas três organizações que operavam neste modelo: o Instituto Comunitário Grande Florianópolis, o Tabôa - Desenvolvimento Comunitário e o Instituto Baixada Maranhense.  Porém, desde 2018 o Instituto para o Desenvolvimento do Investimento Social (IDIS), em parceria com a Charles Stewart Mott Foundation, criou o programa Transformando Territórios, que vem fomentando a criação de mais Institutos e Fundações Comunitárias no Brasil.
        </p>
        <img src={Participantes} alt="Mapa dos participantes do programa, destacado estão: Amazonas, Maranhão, Alagoas, Sergipe, Bahia, Minas Gerais, Espírito Santo, Rio de Janeiro, São Paulo, Santa Cataria e Rio Grande do Sul." />
  </div>
  );
}

export default NationalCommunity;