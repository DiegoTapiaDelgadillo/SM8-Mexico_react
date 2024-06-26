import React, { useEffect } from 'react';
import Mural from "../../components/mural";
import Fondo from "./img/nosotros.jpg";
import Rosetin from "./img/5.png";
import BotonPrincipal from "../../components/botonPrincipal";
import Certificado from "./img/sm8-home-certificado.jpg";
import Andamio from "./img/1.png";
import Calidad from "./img/calidad.jpg";
import CardCodigos from "../../components/cardCodigos";
import Contacto from "../../components/contacto";
import Rose from "./img/Character_Render_02.png";
import Certi from "./pdf/certificado-sm8.pdf";
import conducta from "./pdf/Código de Conducta_Rev.00.pdf";
import privacidad from "./pdf/AVISO DE PRIVACIDAD 2023.pdf";
import etica from "./pdf/Código de Ética_Rev.00.pdf";
import calidad from "./pdf/POLITICA DE CALIDAD.pdf";
import useScrollTop from "../../hooks/useScrollTop";

export default function NosotrosPage() {
  useScrollTop();
  return (
    <div>
      <Mural
        title={"Nosotros"}
        body={
          "Somos una empresa orgullosamente mexicana comprometida con el desarrollo de nuestro país."
        }
        rutaFondo={Fondo}
      ></Mural>
      <div className=" bg-neutral-800 flex justify-center items-center py-24 px-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="w-full flex justify-center items-center">
            <div>
              <h1 className="text-yellow-300 text-3xl xl:text-5xl">
                ¿Quiénes somos?
              </h1>
              <h1 className="text-white text-md xl:text-xl text-justify py-8">
                Empresa 100% mexicana dedicada a la renta y venta de estructuras
                metálicas para la construcción, restauración, industria y
                eventos. Somos líderes en el estudio y empleo de las estructuras
                compuestas de Sistema Multidireccional y tubo-junta. Con esto
                logramos mantener un desarrollo interno constante,
                enriqueciéndose de valiosas experiencias para el continuo
                perfeccionamiento de nuestros productos y servicios.
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={Rosetin} alt="" className="w-5/6" />
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center py-24 px-4 xl:p-24">
        <div className="bg-neutral-900 p-8 xl:p-24 rounded-3xl shadow-2xl w-full border-4 border-neutral-900 hover:border-yellow-300 ease-in-out duration-300 grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="flex justify-center items-center w-full">
            <div className="w-full p-0">
              <h1 className="text-yellow-300 text-2xl xl:text-5xl">
                Conoce nuestras certificaciones
              </h1>
              <h2 className="text-white py-8 text-md xl:text-xl text-justify">
                En SM8 mantenemos una política de calidad muy estricta la cual
                nos permite mantener el equipo en perfecto estado, cuidando ante
                todo la seguridad en nuestros andamios. Esto nos ha permitido
                obtener diferentes certificaciones para estar a la altura del
                mercado.
              </h2>
              <a href={Certi} target="_blank" rel="noopener noreferrer">
                <BotonPrincipal text={"Visitar"}></BotonPrincipal>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center pt-16 xl:p-0">
            <img src={Certificado} alt="" className="w-full xl:w-3/6" />
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center w-full py-24 px-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          <div className="flex items-center w-full">
            <div>
              <h1 className="text-yellow-300 text-3xl xl:text-5xl">Misión</h1>
              <h1 className="text-white text-md xl:text-xl py-8 text-justify">
                Ofrecer y apoyar a nuestros clientes con soluciones de
                ingeniería para la construcción, mantenimiento de instalaciones
                e infraestructura de eventos, a través de la renta y venta de
                estructuras metálicas.
              </h1>
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pt-8">
                Visión
              </h1>
              <h1 className="text-white text-md xl:text-xl py-8 text-justify">
                Ser una empresa de clase mundial, líder nacional en el sector de
                andamios, destacandonos por la satisfacción de nuestros
                clientes, el desarrollo de nuestros colaboradores y las
                soluciones ofrecidas.
              </h1>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center">
            <img src={Andamio} alt="" className="w-5/6" />
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center w-full ">
        <div
          className="flex bg-cover bg-center h-auto p-12 xl:p-24 justify-center items-center "
          style={{ backgroundImage: `url(${Calidad})` }}
        >
          <div>
            <h1 className="text-yellow-300 text-2xl xl:text-6xl text-center">
              LA CALIDAD ES PRIMERO
            </h1>
            <h1 className="text-white text-md xl:text-xl text-justify py-8">
              "Nos enorgullecemos de ofrecer un servicio integral que abarca
              desde la planificación hasta la fase operativa de la obra. Como
              empresa altamente especializada y confiable, nos comprometemos a
              mantener los más altos estándares de calidad. Contamos con un
              sistema de gestión de última generación para la fabricación de
              nuestros equipos y servicios, lo que nos permite supervisar de
              forma integrada y oportuna todos nuestros proyectos en cada una de
              sus etapas. Tu satisfacción y el éxito de tu proyecto son nuestra
              principal prioridad."
            </h1>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center w-full py-24 px-12 xl:p-24">
        <div className="w-full">
          <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-2">
            Transparencia que nos define
          </h1>
          <h1 className="text-white text-md xl:text-xl pb-16">
            Descubre Nuestras Políticas y Compromisos.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
            <CardCodigos
              titulo={"Código de conducta"}
              ruta={conducta}
            ></CardCodigos>
            <CardCodigos
              titulo={"Aviso de privacidad"}
              ruta={privacidad}
            ></CardCodigos>
            <CardCodigos titulo={"Código de ética"} ruta={etica}></CardCodigos>
            <CardCodigos
              titulo={"Politica de calidad"}
              ruta={calidad}
            ></CardCodigos>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center w-full xl:p-24">
        <Contacto
          titulo={"Confía en Nosotros"}
          cuerpo={
            "Andamios SM8, tu Socio de Confianza para Soluciones Inigualables"
          }
          rosetin={Rose}
        ></Contacto>
      </div>
    </div>
  );
}
