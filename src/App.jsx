import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { pages } from "data/pages";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Loading from "@/components/Loading";

const routes = pages.map(e => {
  const Page = lazy(() => import(`./Pages/${e.filename}.jsx`));
  return <Route key={e.name} path={e.route} element={<Page />} />;
});

function App() {
  const location = useLocation();

  useEffect(() => {
    let agent = navigator.userAgent;
    if(agent.match(/firefox|fxios/i)) {
      window.scrollTo(0,0);
    }
    else {
      window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header/>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes}
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;

