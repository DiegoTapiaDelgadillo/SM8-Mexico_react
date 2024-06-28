import clsx from "clsx";

export default function BotonPrincipal({ text, className }) {
  return (
    <>
      <button className={clsx("px-16 py-4 w-full xl:w-auto md:py-4 bg-yellow-300 rounded-3xl shadow-md border-4 border-black hover:bg-black hover:border-yellow-300 hover:text-yellow-300 hover:shadow-2xl ease-in-out duration-300 md:text-xl text-sm",className)}>
        {text}
      </button>
    </>
  );
}
