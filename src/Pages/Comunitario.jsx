import NationalCommunity from "@/components/Comunitario/NationalCommunity";
import { MapPinLine } from "@phosphor-icons/react";

function Community() {
  return (
    <div className="flex-1 text-2xl pb-24">
      <section>
        <div className="flex flex-col gap-10 xl:gap-20 pb-10 pt-10 xl:pt-20 mx-auto max-w-[100rem] px-12">
        <Title 
        color="#F59E0B"
        content="Institutos Comunitários no Brasil"
        />
          < NationalCommunity />
        </div>
      </section>    

    </div>        
  );
}

export default Community;
