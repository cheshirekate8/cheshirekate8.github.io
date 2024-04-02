export default function BottomText({ label, last }) {
  return (
    <div className="font-caveat absolute text-white -z-10 text-[10rem] font-bold opacity-[2%] whitespace-nowrap left-1/2 -translate-x-1/2 md:text-[13rem] xl:text-[22rem] -bottom-12 md:-bottom-24 xl:-bottom-40">
      {label}
  </div>
  );
}
