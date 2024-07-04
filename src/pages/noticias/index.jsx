import { useState, useEffect } from "react";
import useScrollTop from "../../hooks/useScrollTop"
import Carrusel from "../../components/carrusel"
import i1 from "../../pages/sucursalesPage/img/aguascalientes.jpg"
import i2 from "../../pages/sucursalesPage/img/gdl.jpg"
import i3 from "../../pages/sucursalesPage/img/zapopan.jpg"
import i4 from "../../pages/sucursalesPage/img/LEON.webp"

export default function Noticias() {
    useScrollTop();

    const imagenes = [
        i1,
        i2,
        i3,
        i4,
    ];

    return(
        <div>
            <Carrusel images={imagenes} />
        </div>
    )
}
