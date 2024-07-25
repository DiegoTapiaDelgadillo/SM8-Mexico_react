import React, { useEffect } from "react";
import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loanding from "./components/loandig";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
    });
  }, []);

  const Home = lazy(() => import("./pages/homePage/index"));
  const Servicios = lazy(() => import("./pages/serviciosPage/index"));
  const Sucursales = lazy(() => import("./pages/sucursalesPage/index"));
  const Vacantes = lazy(() => import("./pages/vacantesPage/index"));
  const Contacto = lazy(() => import("./pages/contactoPage/index"));
  const NotFound = lazy(() => import("./pages/404Page/index"));
  const Noticias = lazy(() => import("./pages/noticiasPage/index"));
  const NoticiaDetalle = lazy(() =>
    import("./pages/noticiasPage/NoticiaDetalle")
  );
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
  const LogIn = lazy(() => import("./pages/logIn"));
  const ChangePassword = lazy(() => import("./pages/changePassword"));
  const GestionDeo = lazy(() => import("./pages/GestionDEO"));
  const GestionVacantes = lazy(() => import("./pages/gestionVacantes"));
  const GestionNoticias = lazy(() => import("./pages/gestionNoticias"));

  return (
    <>
      <HashRouter>
        <Navbar />
        <Suspense fallback={<Loanding />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route
              path="/Servicios/Multidireccional"
              element={<Multidireccional />}
            />
            <Route path="/Servicios/Torres" element={<Torres />} />
            <Route path="/Servicios/Cimbra" element={<Cimbra />} />
            <Route path="/Servicios/TuboJunta" element={<Tubo />} />
            <Route path="/Servicios/Viga" element={<Viga />} />
            <Route path="/Servicios/Graderias" element={<Graderias />} />
            <Route path="/Servicios/Silletas" element={<Silletas />} />
            <Route path="/Servicios/Tirantes" element={<Tirantes />} />
            <Route path="/Servicios/Arcotechos" element={<Arco />} />
            <Route path="/Sucursales" element={<Sucursales />} />
            <Route path="/Vacantes" element={<Vacantes />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalle />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/change-password/" element={<ChangePassword />} />{" "}
            {/* Cambiar ruta por "/change-password/:token" para extraer el token de la url */}
            <Route path="/gestion-deo" element={<GestionDeo />} />
            <Route path="/gestion-vacantes" element={<GestionVacantes />} />
            <Route path="/gestion-noticias" element={<GestionNoticias />} />
          </Routes>
        </Suspense>
        <Footer></Footer>
      </HashRouter>
    </>
  );
}
