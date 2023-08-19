import govenance from "../assets/picGovernance.svg"
import associatesPics from "../assets/picAssociates.svg"
import Associates from "../components/Associates/Associates";

function About() {

  const associatesInfos = [
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
    { avatar_url: associatesPics , name: "Nome da pessoa", nameFunction: "Função da Pessoa"},
  ];

  return (
    <div className="flex flex-col text-xl font-inter">
      <div className="min-h-screen max-h-max flex flex-row flex-wrap mx-32 my-20 gap-5 content-center">
        <h1 className="w-full font-bold">
          Governança:
        </h1>
          <p className="w-1/2 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis imperdiet, 
          maximus odio sed, rhoncus ligula. Proin sem sem, interdum quis feugiat id, volutpat a odio. 
          In eget nulla quis tellus blandit convallis ac ut lacus. Donec id nisi felis. Ut justo nisi, 
          lacinia vel finibus ut, vulputate et ligula. Ut nisl neque, volutpat vestibulum erat a, molestie aliquam eros. 
          Integer maximus tellus nec diam tempus, sed lacinia quam egestas. Quisque augue felis, porttitor vitae venenatis vel, 
          auctor vel nunc. Sed nec ex tortor. Vivamus et purus felis.
          </p>
          <img src={govenance} alt="Imagem de pessoas representando uma governança" className="w-2/5 mt-8"/>
          <p className="w-11/12 mt-8">
          Donec tincidunt justo ut luctus fringilla. Etiam non ligula id tortor congue facilisis. Sed elementum tincidunt purus,
          a interdum augue posuere ut. Phasellus et eros eros. Proin porta efficitur ultricies. Duis justo justo, iaculis vel placerat nec,
          tristique et enim. Maecenas eleifend nec nulla quis eleifend. Nunc convallis orci vitae iaculis suscipit. Pellentesque habitant 
          morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc rhoncus, nunc ac vehicula bibendum, urna magna condimentum velit, 
          faucibus euismod odio lectus a turpis. Vivamus lacinia felis a erat posuere, ac pulvinar ligula pretium. Vivamus nec varius est. 
          Nam dapibus sodales orci non faucibus. Etiam viverra pellentesque risus, vel consectetur dolor dictum posuere.
          </p>
      </div>
      <div className="min-h-screen max-h-max bg-gray-100">
          <div className="flex flex-row flex-wrap mx-32 my-20 gap-32 justify-center">
          <h1 className="flex w-full justify-center">
            Associados
          </h1>
          {associatesInfos.map((info) => (
            <Associates avatar_url={info.avatar_url} name={info.name} nameFunction={info.nameFunction} />
          ))
          }
          </div>
      </div>
      <div className="h-screen"> 
        <h1>Transparencia</h1>
        <p>
          Donec tincidunt justo ut luctus fringilla. Etiam non ligula id tortor congue facilisis. Sed elementum tincidunt purus, a interdum augue posuere ut. ~
          Phasellus et eros eros. Proin porta efficitur ultricies. Duis justo justo, iaculis vel placerat nec, tristique et enim. Maecenas eleifend nec nulla quis eleifend.
          Nunc convallis orci vitae iaculis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.   
        </p>
      <div className="">
        <h1>2022</h1>
      </div>
      <div className="">
        <h1>2021</h1>
      </div>
      <div className="">
        <h1>2020</h1>
      </div>
      </div>
    </div>
  );
}

export default About;

