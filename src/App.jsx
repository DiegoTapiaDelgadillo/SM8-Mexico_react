import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  const Home = lazy(() => import("./pages/homePage/index"));
  const Servicios = lazy(() => import("./pages/serviciosPage/index"));
  const Sucursales = lazy(() => import("./pages/sucursalesPage/index"));
  const Vacantes = lazy(() => import("./pages/vacantesPage/index"));
  const Contacto = lazy(() => import("./pages/contactoPage/index"));
  const NotFound = lazy(() => import("./pages/404Page/index"));
  const Nosotros = lazy(() => import("./pages/nosotrosPage/index"));
  const Multidireccional = lazy(() =>
    import("./pages/serviciosPage/multidireccionalPage")
  );
  const Torres = lazy(() => import("./pages/serviciosPage/torresPage"));
  const Cimbra = lazy(() => import("./pages/serviciosPage/cimbraPage"));
  const Tubo = lazy(() => import("./pages/serviciosPage/tuboPage"));
  const Viga = lazy(() => import("./pages/serviciosPage/vigaPage"));
  const Graderias = lazy(() => import("./pages/serviciosPage/graderiasPage"));
  const Silletas = lazy(() => import("./pages/serviciosPage/silletasPage"));
  const Tirantes = lazy(() => import("./pages/serviciosPage/tirantesPage"));
  const Arco = lazy(() => import("./pages/serviciosPage/arcotechosPage"));

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Servicios" element={<Servicios />}></Route>
          <Route
            path="/Servicios/Multidireccional"
            element={<Multidireccional />}
          ></Route>
          <Route path="/Servicios/Torres" element={<Torres />}></Route>
          <Route path="/Servicios/Cimbra" element={<Cimbra />}></Route>
          <Route path="/Servicios/TuboJunta" element={<Tubo />}></Route>
          <Route path="/Servicios/Viga" element={<Viga />}></Route>
          <Route path="/Servicios/Graderias" element={<Graderias />}></Route>
          <Route path="/Servicios/Silletas" element={<Silletas />}></Route>
          <Route path="/Servicios/Tirantes" element={<Tirantes />}></Route>
          <Route path="/Servicios/Arcotechos" element={<Arco />}></Route>
          <Route path="/Sucursales" element={<Sucursales />}></Route>
          <Route path="/Vacantes" element={<Vacantes />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Nosotros" element={<Nosotros />}></Route>
        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  );
}
