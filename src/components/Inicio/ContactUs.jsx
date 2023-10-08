import { Envelope, Phone, InstagramLogo } from "@phosphor-icons/react";
import Title from "@/components/Title";
import { icose } from "data/icose";

function contactUs() {
  return (
    <div className="flex flex-col gap-8 items-center font-bold">
      <Title
        centeredTitle={true}
        content="Fale conosco:"
      />
      <div className="flex gap-2 flex-col items-center lg:justify-center w-full">
        <div className="flex gap-2 items-center">
          <Envelope size={32} />
          <a className="font-bold" href={`mailto:${icose.email}?body=Diga-nos o que precisa`}>{icose.email}</a>
        </div>
        <span className="flex gap-2 items-center">
          <Phone size={32} />
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <p className="text-center">{icose.phone}</p>
            <p className="text-center">(Para recados)</p>
          </div>
        </span>
        <div className="flex gap-2 items-center">
          <InstagramLogo size={32} />
          <a href={`https://www.instagram.com/institutocomunitariodesergipe/`} target="_blank">{icose.instagram}</a>
        </div>
      </div>
    </div>
  );
}

export default contactUs;

