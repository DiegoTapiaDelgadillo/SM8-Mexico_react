import CardSucursales from "../../components/cardSucursales";
import Mural from "../../components/mural";
import Fondo from "./img/sucursales.jpg";
import Aguascalientes from "./img/aguascalientes.jpg";
import Rosetin from "./img/2.png";
import Contacto from "../../components/contacto";
import Cancun from "./img/cancun.jpg";
import Coatza from "./img/coatza.jpg";
import Cuerna from "./img/cuerna.jpg";
import Culiacan from "./img/culiacan.jpg";
import Cdmx from "./img/cdmx.jpg";
import Guadalajara from "./img/gdl.jpg";
import LaPaz from "./img/la_paz.jpg";
import LosCabos from "./img/los_cabos.jpg";
import Mazatlan from "./img/mazatlan.jpg";
import Merida from "./img/merida.jpg";
import Monterrey from "./img/monterrey.jpg";
import Puebla from "./img/puebla.jpg";
import Vallarta from "./img/vallarta.jpg";
import Queretaro from "./img/qro.jpg";
import Tijuana from "./img/tijuana.jpg";
import Toluca from "./img/toluca.jpg";
import Tuxcla from "./img/tuxtla.jpg";
import Zapopan from "./img/zapopan.jpg";
import Corporativo from "./img/corpo.jpg";
import useScrollTop from "../../hooks/useScrollTop";

export default function SucursalesPage() {
  useScrollTop();
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
      <div className="bg-neutral-800  w-full py-24 px-4 sm:px-12 md:px-24">
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
            titulo={"Cancún, Qroo"}
            direccion={
              " Blvd. Luis Donaldo Colocio Km 10 Lote 44, Alfredo V. Bonfil, Miguel Hidalgo 3ra Sección, 77560 Cancún, Q.R."
            }
            telefono={"998 882 1805"}
            rutaImagen={Cancun}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Canc%C3%BAn/@21.088586,-86.8452679,17z/data=!3m1!4b1!4m6!3m5!1s0x8f4c2a40034d9e1f:0x416bd9c9e56c6db1!8m2!3d21.088586!4d-86.842693!16s%2Fg%2F11b6_cz8fn"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Coatzacoalcos, Ver"}
            direccion={
              "Carr. Coatzacoalcos Villahermosa km 3.9, Andador 2, Bodega 2, Nueva Pajaritos, 96380 Coatzacoalcos, Ver."
            }
            telefono={"921 191 1481"}
            rutaImagen={Coatza}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Coatzacoalcos/@18.111508,-94.4090269,17z/data=!3m1!4b1!4m6!3m5!1s0x85e9820dc3c99205:0xea3527939c1ca209!8m2!3d18.111508!4d-94.406452!16s%2Fg%2F11bx567tl3"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Cuernavaca, Mor"}
            direccion={
              " 20 de Noviembre 8, zona 1, Tezontepec, 62250 Cuernavaca, Mor."
            }
            telefono={"777 311 3073"}
            rutaImagen={Cuerna}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Cuernavaca/@18.942709,-99.2316979,17z/data=!3m1!4b1!4m6!3m5!1s0x85cddfcc2cd3da05:0x3fb01c14ddfee56a!8m2!3d18.942709!4d-99.229123!16s%2Fg%2F11bx55ynwh"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Culiacán, Sin"}
            direccion={
              "N°, Calz. Aeropuerto 7258, Bachigualato, 80140 Culiacán Rosales, Sin."
            }
            telefono={"667 760 1428"}
            rutaImagen={Culiacan}
            maps={
              "https://www.google.com.mx/maps/place/Andamios+SM8+de+M%C3%A9xico+Suc.+Culiac%C3%A1n/@24.7749309,-107.4652179,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcd039998f9c3b:0x699dbcc4a52772bf!8m2!3d24.774931!4d-107.460347!16s%2Fg%2F11bx56gb6x?entry=ttu"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Ciudad de México"}
            direccion={
              "Pte. 134 769, Industrial Vallejo, Azcapotzalco, 02300 Ciudad de México, CDMX"
            }
            telefono={"55 5719 0513"}
            rutaImagen={Cdmx}
            maps={
              "https://www.google.com/maps/place/Sistemas+Multidireccionales+SM8+de+Mexico/@19.4948495,-99.1664112,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f8426af1396f:0xbf3b39895bbb6c47!8m2!3d19.4948495!4d-99.1664112!16s%2Fg%2F1tj9tp41?entry=ttu"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Guadalajara, Jal"}
            direccion={" Tuberosa 215, San Carlos, 44460 Guadalajara, Jal."}
            telefono={"33 3619 5820"}
            rutaImagen={Guadalajara}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Guadalajara/@20.658361,-103.3456379,17z/data=!3m1!4b1!4m6!3m5!1s0x8428b21bbc1edb29:0x77db9d37159ba2b2!8m2!3d20.658361!4d-103.343063!16s%2Fg%2F1v6l7tgm"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"La paz, B.C.S"}
            direccion={" C. Sonora 467, Pueblo Nuevo, 23060 La Paz, B.C.S."}
            telefono={" 612 124 2420"}
            rutaImagen={LaPaz}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico/@24.1462611,-110.3253769,17z/data=!3m1!4b1!4m6!3m5!1s0x86afd34ed2c235bb:0xd83a79a9273b21a1!8m2!3d24.1462611!4d-110.322802!16s%2Fg%2F11bwkh769g"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Los Cabos, B.C.S"}
            direccion={"Av. La Paz N° 3308, Sta Rosa, 23428 Los Cabos, B.C.S."}
            telefono={"624 124 0185"}
            rutaImagen={LosCabos}
            maps={
              "https://www.google.com.mx/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Los+Cabos/@23.088883,-109.7107719,17z/data=!3m1!4b1!4m6!3m5!1s0x86af5a5f40e5c23f:0xfe86fbd0c90a1c9c!8m2!3d23.088883!4d-109.708197!16s%2Fg%2F1v6p4qx4?entry=ttu"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Mazatlán, Sin"}
            direccion={
              " Carretera Internacional Al Norte Km 1.5, N° 309, El Venadillo, 82129 Mazatlán, Sin."
            }
            telefono={"669 968 3256"}
            rutaImagen={Mazatlan}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Mazatl%C3%A1n/@23.2767955,-106.4163352,17z/data=!3m1!4b1!4m6!3m5!1s0x8698acc3f772d021:0x342d5e09b1d60f43!8m2!3d23.2767955!4d-106.4137603!16s%2Fg%2F1tffpsj7"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Mérida, Yuc"}
            direccion={
              "C. Vigésima Segunda LB, 20 de Noviembre, 97288 Mérida, Yuc."
            }
            telefono={" 999 429 9529"}
            rutaImagen={Merida}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+M%C3%A9rida/@20.9304609,-89.6789064,17z/data=!3m1!4b1!4m6!3m5!1s0x8f56738bdb175045:0x39528aca6e456f97!8m2!3d20.9304609!4d-89.6763315!16s%2Fg%2F11hmbyzyvc"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Monterrey, N.L"}
            direccion={
              "Lic. José López Portillo 333 Nte., Bod. 206, Valle del Cañada, 66059 Cd Gral Escobedo, N.L."
            }
            telefono={"81 8351 5557"}
            rutaImagen={Monterrey}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Monterrey/@25.7722937,-100.288102,17z/data=!3m1!4b1!4m6!3m5!1s0x866295a899d453eb:0x67dde4c546e88a02!8m2!3d25.7722937!4d-100.288102!16s%2Fg%2F1tf_1hnl?entry=ttu"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Puebla, Pue."}
            direccion={"Av. Bugambilias 6315, Bugambilias, 72580 Puebla, Pue."}
            telefono={"222 891 7808"}
            rutaImagen={Puebla}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Puebla/@19.0066627,-98.2177017,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc0a9ec556d15:0x8c454c1ca10f7f76!8m2!3d19.0066627!4d-98.2151268!16s%2Fg%2F1tdm_vj8"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Puerto Vallarta, Jal"}
            direccion={"Carretera, A Ixtapa 421, 48291 Las Juntas, Jal."}
            telefono={"322 224 0762"}
            rutaImagen={Vallarta}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+P.+Vallarta/@20.702266,-105.236859,17z/data=!3m1!4b1!4m6!3m5!1s0x842145638ae9ce35:0xdd7415d806a70cf4!8m2!3d20.702266!4d-105.2342841!16s%2Fg%2F1v44f8l_"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Querétaro, Qro"}
            direccion={
              "C. Roberto Barrios 2, Casa Blanca, 76030 Santiago de Querétaro, Qro."
            }
            telefono={"442 242 8625"}
            rutaImagen={Queretaro}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Quer%C3%A9taro/@20.5790424,-100.4020271,17z/data=!3m1!4b1!4m6!3m5!1s0x85d34528db4fabdb:0x70eeb421df9c1f27!8m2!3d20.5790424!4d-100.3994522!16s%2Fg%2F11b806dbc4"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Tijuana, B.C"}
            direccion={
              "Blvr. Lázaro Cárdenas 10, Los Santos, 22104 Tijuana, B.C."
            }
            telefono={"664 622 2160"}
            rutaImagen={Tijuana}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Tijuana/@32.5049967,-116.9653844,17z/data=!3m1!4b1!4m6!3m5!1s0x80d94805c119245f:0xe4f6f2835fd3849!8m2!3d32.5049967!4d-116.9628095!16s%2Fg%2F1vg_7l7p"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Toluca, Edo.Méx"}
            direccion={
              "Benito Juárez 16, Reforma, 52100 San Mateo Atenco, Méx."
            }
            telefono={"722 238 1405"}
            rutaImagen={Toluca}
            maps={
              "https://www.google.com/maps/place/Andamios+SM8+de+M%C3%A9xico+-+Suc.+Toluca/@19.2931019,-99.5633589,17z/data=!3m1!4b1!4m6!3m5!1s0x85cd8ac75ff1d79f:0x1c8d054fcb5db2aa!8m2!3d19.2931019!4d-99.560784!16s%2Fg%2F11c2q3vs_h"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Tuxtla Gutiérrez, Chis"}
            direccion={
              "Libramiento Nte. Pte. 812, Plan de Ayala Ampliación Norte, 29020 Tuxtla Gutiérrez, Chis."
            }
            telefono={"961 140 3105"}
            rutaImagen={Tuxcla}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Tuxtla+Gtz./@16.7756279,-93.1873349,17z/data=!3m1!4b1!4m6!3m5!1s0x85ecdbe15708181f:0x2b7e3838542a6016!8m2!3d16.775628!4d-93.182464!16s%2Fg%2F11bwbwp8jz"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Zapopan, Jal"}
            direccion={
              "Anillo Perif. Nte. Manuel Gómez Morín 1500, San Juan de Ocotán, 45019 Zapopan, Jal."
            }
            telefono={"33 3070 4277"}
            rutaImagen={Zapopan}
            maps={
              "https://www.google.com/maps/place/SM8+de+M%C3%A9xico+-+Suc.+Zapopan/@20.6375891,-103.4400188,19z/data=!4m10!1m2!2m1!1ssm8!3m6!1s0x8428ad3e5e9b6ee9:0x76373cdfbd55d76b!8m2!3d20.6377064!4d-103.4395474!15sCgNzbTgiA4gBAZIBG2J1aWxkaW5nX21hdGVyaWFsc19zdXBwbGllcuABAA!16s%2Fg%2F11b7ln07rs?hl=es&entry=ttu"
            }
          ></CardSucursales>
          <CardSucursales
            titulo={"Corporativo"}
            direccion={
              "C. Guillermo Gonzalez Camarena 1450-Piso 4, Santa Fe, Sta Fé, Álvaro Obregón, 01210 Ciudad de México, CDMX"
            }
            telefono={"55 5514 2372"}
            rutaImagen={Corporativo}
            maps={
              "https://www.google.com/maps/place/ANDAMIOS+SM8+DE+MEXICO+CORPORATIVO/@19.3650303,-99.2653537,17z/data=!4m6!3m5!1s0x85d1f92bdc5655cf:0xadc2c6b7c3f1798d!8m2!3d19.364756!4d-99.2656536!16s%2Fg%2F11grtx83sx"
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
