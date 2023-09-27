import { Envelope, Phone } from "@phosphor-icons/react";

function ContactUs() {
  return (
    <div className="flex flex-col gap-4 items-center font-bold">
      <p>Fale conosco:</p>
      <div className="flex gap-2 flex-col lg:flex-row items-center lg:justify-around w-full">
        <div className="flex gap-2 items-center">
          <Envelope size={32} />
          <p className="text-center">email@email.com.br</p>
        </div>
        <span className="flex gap-2 items-center">
          <Phone size={32} />
          <p className="text-center">(79) 3223-2159 (Para recados)</p>
        </span>
      </div>
    </div>
  );
}

export default ContactUs;

