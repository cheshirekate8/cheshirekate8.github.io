export default function SectionTitle({ label, blueText, whiteText }) {
  return (
    <>
      <div className="mt-8 text-2xl uppercase font-bold ease-in-out duration-500 md:text-3xl lg:text-5xl z-10">
        {label}
      </div>
      <div className="flex items-center justify-center mb-8">
        <span className="font-jost font-bold text-base uppercase text-cyan-500 ease-in-out duration-500 md:text-base ">
          {blueText}{" "}
        </span>
        <span className="font-caveat px-4 capitalize text-2xl ease-in-out duration-500 md:text-3xl">
          {whiteText}
        </span>
      </div>
    </>
  );
}
