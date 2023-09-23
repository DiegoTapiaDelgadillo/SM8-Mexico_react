export default function BotonPrincipal({ text }) {
  return (
    <>
      <button className="pt-4 pb-4 pr-6 pl-6 bg-yellow-300 rounded-full shadow-md border-4 border-black hover:bg-black hover:border-yellow-300 hover:text-yellow-300 hover:shadow-2xl ease-in-out duration-300">
        {text}
      </button>
    </>
  );
}
