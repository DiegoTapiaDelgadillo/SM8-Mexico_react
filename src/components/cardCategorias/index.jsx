import CardDerecha from "./derecha";
import CardIzquierda from "./izquierda";
import Eventos from "./img/1.jpg";
import Construccion from "./img/2.png";
import Restauracion from "./img/6.png";
import Industria from "./img/4.png";
 
export default function CardCategorias() {
  
  return (
    <>
      <CardDerecha
        title={"Eventos"}
        body={
          "Nuestro sistema es el ideal para restauraciones tanto en exteriores como en interiores, además gracias a su estabilidad, se pueden cubrir grandes extensiones de obra sin importar la altura."
        }
        img={Eventos}
      />
      <CardIzquierda
        title={"Construcción"}
        body={
          "Nuestro sistema ofrece una gran versatilidad para la realización de obras provisionales sin importar lo alto o profunda que sea la obra, apuntalamiento, escalera de obra y estructura deservicio."
        }
        img={Construccion}
      />
      <CardDerecha
        title={"Restauración"}
        body={
          "Nuestro sistema es el ideal para restauraciones tanto en exteriores como en interiores, además gracias a su estabilidad, se pueden cubrir grandes extensiones de obra sin importar la altura."
        }
        img={Restauracion}
      />
      <CardIzquierda
        title={"Industria"}
        body={
          "Nuestro sistema ofrece una gran versatilidad para la realización de obras provisionales sin importar lo alto o profunda que sea la obra, apuntalamiento, escalera de obra y estructura deservicio."
        }
        img={Industria}
      />
    </>
  );
}
