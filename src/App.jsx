import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

const Home = lazy(() => import("@/Pages/Incio"));
const About = lazy(() => import("@/Pages/Sobre"));
const Notices = lazy(() => import("@/Pages/Editais"));
const Transfers = lazy(() => import("@/Pages/Transferencias"));
const Partners = lazy(() => import("@/Pages/Parceiros"));
const Donation = lazy(() => import("@/Pages/Doacao"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/editais" element={<Notices />} />
          <Route path="/transferencias" element={<Transfers />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/doacao" element={<Donation />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;

