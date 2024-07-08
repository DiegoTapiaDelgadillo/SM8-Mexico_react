import { useState, useEffect } from "react";
import useScrollTop from "../../hooks/useScrollTop";
import Carrusel from "../../components/carrusel";
import i2 from "../../components/carrusel/img/c5.jpg";
import i3 from "../../components/carrusel/img/c3.jpg";
import i4 from "../../components/carrusel/img/c4.webp";

export default function Noticias() {
  useScrollTop();

  const imagenes = [
    { src: i2, title: "Versatilidad, Calidad y Seguridad", 
        text: "Renta y Venta de Andamio Multidireccional, Marco y Cruceta, Tubo-Junta, Cimbra, Apuntalamiento, Consumibles y más.", 
        buttonUrl: "/pagina1" },
    { src: i3, title: "Lorem IpsumCurabitur suscipit nulla ex.", 
        text: "Nam quis lectus id turpis condimentum rutrum nec quis justo. Nunc elementum imperdiet lectus, quis pulvinar ante cursus at. Curabitur fermentum ligula sed nisl consequat convallis.Nam quis lectus id turpis condimentum rutrum nec quis justo. Nunc elementum imperdiet lectus, quis pulvinar ante cursus at. Curabitur fermentum ligula sed nisl consequat convallis.", 
        buttonUrl: "/pagina2" },
    { src: i4, title: "Sed malesuada lorem eget nulla aliquet posuere.", 
        text: "Cras vel sem in nisl tempus efficitur vitae in eros. Ut consectetur non turpis a suscipit. Donec sed nunc mi. Aenean facilisis mi id sapien auctor, malesuada aliquet velit volutpat. ", 
        buttonUrl: "/pagina3" },
  ];

  return (
    <div>
      <Carrusel images={imagenes} />
    </div>
  );
}
