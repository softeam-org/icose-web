import { Link } from "react-router-dom";

function CadaFotografia() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Marta é uma ciclista brasileira que percorreu mais de 10 mil quilômetros só em cicloviagens, é também fotógrafa
        e uma jornalista apaixonada pelo poder transformador da imagem e da narrativa. Marta, com a sua bicicleta irá fazer
        o trajeto do baixo São Francisco na foz desse rio tão importante para o nordeste e para o Brasil até o alto Rio São Francisco 
        sergipano (Canindé do São Francisco).
      </p>
      <p>
        Através das lentes da sua câmera, ela irá capturar mais do que imagens e narrativas, ela irá capturar a essência 
        da mulher sergipana ribeirinha, sua determinação e poder, suas histórias de resiliência e luta contra as probabilidades.
      </p>
      <p>
        O resultado desse projeto será compartilhado com o público através de uma exposição fotográfica itinerante. 
        O objetivo não se limita a fotografias, é sobre honrar as raízes, celebrar as conquistas e enfrentar os desafios
        de frente. É sobre mostrar a força que pulsa em nosso estado.
      </p>
      <p>
        Este projeto faz parte da Campanha Coletiva no site da Benfeitoria. <a href="https://benfeitoria.com/sergipanasemfoco" target="_blank" className="text-standard-blue hover:underline text-black">Clique aqui</a> para realizar sua doação!
      </p>
    </div>
  );
}

export default CadaFotografia;
