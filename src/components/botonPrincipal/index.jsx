export default function BotonPrincipal({ text }) {
  return (
    <>
      <button className="p-4 md:py-4 md:px-6 bg-yellow-300 rounded-3xl shadow-md border-4 border-black hover:bg-black hover:border-yellow-300 hover:text-yellow-300 hover:shadow-2xl ease-in-out duration-300 md:text-xl text-sm">
        {text}
      </button>
    </>
  );
}
