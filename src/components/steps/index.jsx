import { step } from "@material-tailwind/react";
import CircleStep from "./cirlceStep";
import LineStep from "./lineStep";

export default function Steps() {
  const stepsText = [
    {
      text: "Contenido",
      complited: false,
    },
    {
      text: "Imagenes",
      complited: false,
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-2 items-center sm:hidden">
        {stepsText.map((step, index) => (
          <>
            <div className=" w-full flex justify-center" key={index}>
              <CircleStep number={index + 1} complited={step.complited} />
            </div>
            <p className=" text-start text-white" key={index}>
              {step.text}
            </p>
            <div className="w-full flex justify-center" key={index}>
              <LineStep />
            </div>
            <div></div>
          </>
        ))}
        <div className=" w-full flex justify-center">
          <CircleStep number={3} complited={false} />
        </div>
        <p className=" text-start text-white">Publicar</p>
      </div>

      <div className=" gap-2 items-center hidden sm:flex">
        {stepsText.map((step, index) => (
          <>
            <CircleStep number={index + 1} complited={step.complited} />
            <p className=" text-white">{step.text}</p>
            <LineStep />
          </>
        ))}
        <CircleStep number={3} />
        <p className=" text-white">Publicar</p>
      </div>
    </>
  );
}
