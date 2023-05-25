import { lazy, Suspense } from "react";
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
  return (
    <div className="flex flex-col min-h-screen">
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

