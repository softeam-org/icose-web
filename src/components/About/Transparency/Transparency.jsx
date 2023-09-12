import Title from "@/components/Title";
import { FilePdf } from "@phosphor-icons/react";

function Transparency({ title, attachments }) {

  return (
    <div className="flex flex-col gap-12">
      <h2>
        <Title
          color="dark-green"
          content={title}
        />
      </h2>
      <div className="flex flex-wrap gap-6 ">
        {attachments.map((attachment, index) => (
          <a key={index} href={`data/transparency/${attachment.filename}`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline h-auto normal-case">
              <FilePdf size={32} weight="fill" />{attachment.filename}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Transparency;
