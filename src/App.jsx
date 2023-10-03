import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  const Home = lazy(() => import("./pages/homePage/index"));
  const Servicios = lazy(() => import("./pages/serviciosPage/index"));

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Servicios" element={<Servicios />}></Route>
        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  );
}
