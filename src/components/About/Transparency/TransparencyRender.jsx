
import { transparency } from "data/transparency";
import Transparency from "./Transparency";

const transparencyList = transparency.map(transparency => {
  const title = transparency.title;
  const attachments = transparency.attachments;
  return <Transparency key={transparency.filename} title={title} attachments={attachments} />;
});

function TransparencyRender() {
  return (
    <div className="flex flex-col gap-12">
      {transparencyList}
    </div>
  );
}

export default TransparencyRender;
