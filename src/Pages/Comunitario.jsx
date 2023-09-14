
import NacionalCommunity from "@/components/Comunitario/NacionalCommunity";
import { MapPinLine } from "@phosphor-icons/react";

function Community() {
  return (
    <div className="flex-1 text-2xl pb-24">

      
      <section className="flex flex-col px-10 py-10 gap-2 "> 
        
      </section>

      <section>
        <div className="flex flex-col gap-10 xl:gap-20 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">

          {/* --- Componetizar elemento abaixo --- */}
          <div className="collapse collapse-plus text-white bg-standard-blue">
            <input type="checkbox" className="accordion-1" />
            <div className="collapse-title text-xl font-medium flex flex-row gap-5">
              <MapPinLine size={24} />
              <span>TITULO</span>
            </div>
            <div className="collapse-content text-base px-10">
              <p>Descricao</p>
            </div>
          </div>
          {/* ------ */}
          < NacionalCommunity />
        </div>
      </section>    

    </div>        
  );
}

export default Community;
