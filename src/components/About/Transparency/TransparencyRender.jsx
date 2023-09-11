import { lazy } from "react";
import { transparency } from "data/transparency";
import Transparency from "./Transparency";

const transparencyList = transparency.map(transparency => {
  const title = transparency.title;
  const Content = lazy(() => import(`./Contents/${transparency.filename}.jsx`));
  return <Transparency key={transparency.filename} title={title} content={<Content />} />;
});

function TransparencyRender() {
  return (
    <div className="flex flex-col gap-12">
      {transparencyList}
    </div>
  );
}

export default TransparencyRender;
