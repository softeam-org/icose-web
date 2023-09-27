import { Envelope, Phone } from "@phosphor-icons/react";
import Title from "@/components/Title";

function ContactUs() {
  return (
    <div className="flex flex-col gap-8 items-center font-bold">
      <Title
        centeredTitle={true}
        content="Fale conosco:"
      />
      <div className="flex gap-2 flex-col items-center lg:justify-center w-full">
        <div className="flex gap-2 items-center">
          <Envelope size={32} />
          <a className="font-bold" href="mailto:email@email.com.br?subject=Fortalecimento Comunitário&body=Diga-nos o que precisa">email@email.com.br</a>
        </div>
        <span className="flex gap-2 items-center">
          <Phone size={32} />
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <p className="text-center">(79) 3223-2159</p>
            <p className="text-center">(Para recados)</p>
          </div>
        </span>
      </div>
    </div>
  );
}

export default ContactUs;

