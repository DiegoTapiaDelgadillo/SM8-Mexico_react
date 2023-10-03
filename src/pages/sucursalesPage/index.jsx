import CardSucursales from "../../components/cardSucursales";
import Mural from "../../components/mural";
import Fondo from "./img/sucursales.jpg";
import Aguascalientes from "./img/aguascalientes.jpg";
import Rosetin from "./img/2.png";
import Contacto from "../../components/contacto";
export default function SucursalesPage() {
  return (
    <div>
      <Mural
        title={"Nuestras Sucursales"}
        body={
          "SM8 cuenta con 19 sucursales al rededor del país, conoce cada una de ellas."
        }
        buttonText={"Conocer más"}
        rutaFondo={Fondo}
      ></Mural>
      <div className="bg-neutral-800  w-full py-24 px-12 md:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-items-center">
          <CardSucursales
            titulo={"Aguascalientes"}
            direccion={
              "Melquiades Moreno 1914, El Plateado, 20137 Aguascalientes, Ags."
            }
            telefono={"449 929 5574"}
            rutaImagen={Aguascalientes}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Aguascalientes/@21.9086121,-102.2973394,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ec20d45f48d3:0x96e3df8c6f77d24b!8m2!3d21.9086121!4d-102.2947645!16s%2Fg%2F11g8p249hd"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Aguascalientes"}
            direccion={
              "Melquiades Moreno 1914, El Plateado, 20137 Aguascalientes, Ags."
            }
            telefono={"449 929 5574"}
            rutaImagen={Aguascalientes}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Aguascalientes/@21.9086121,-102.2973394,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ec20d45f48d3:0x96e3df8c6f77d24b!8m2!3d21.9086121!4d-102.2947645!16s%2Fg%2F11g8p249hd"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Aguascalientes"}
            direccion={
              "Melquiades Moreno 1914, El Plateado, 20137 Aguascalientes, Ags."
            }
            telefono={"449 929 5574"}
            rutaImagen={Aguascalientes}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Aguascalientes/@21.9086121,-102.2973394,17z/data=!3m1!4b1!4m6!3m5!1s0x8429ec20d45f48d3:0x96e3df8c6f77d24b!8m2!3d21.9086121!4d-102.2947645!16s%2Fg%2F11g8p249hd"
            }
          ></CardSucursales>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center px-6 bg-neutral-800">
        <Contacto
          titulo={"Cada día estamosmás cerca de ti"}
          cuerpo={
            "Nuestro grupo de expertos estan listos para brindarte la mejor solución."
          }
          rosetin={Rosetin}
        ></Contacto>
      </div>
    </div>
  );
}
