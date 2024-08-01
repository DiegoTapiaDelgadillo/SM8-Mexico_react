import CheckSvg from "../checkSvg";

export default function CircleStep({ number, complited }) {
  return (
    <>
      {complited ? (
        <div className=" border-2 border-yellow-300 px-2 py-2 rounded-full bg-yellow-300">
          <CheckSvg />
        </div>
      ) : (
        <div className=" border-2 border-yellow-300 px-4 py-2 rounded-full">
          <p className="text-white">{number}</p>
        </div>
      )}
    </>
  );
}
