import clsx from "clsx";
export default function Title({ text, className }) {
  return (
    <h1
      className={clsx(
        "text-3xl lg:text-4xl xl:text-5xl pb-8 text-yellow-300",
        className
      )}
    >
      {text}
    </h1>
  );
}
