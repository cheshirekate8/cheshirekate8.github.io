export default function BottomText({ label, last }) {
  return (
    <div className={`font-caveat absolute -z-50 text-[10rem] font-bold opacity-[1%] whitespace-nowrap left-1/2 -translate-x-1/2 md:text-[13rem]ease-in-out duration-500 xl:text-[22rem] -bottom-12 md:-bottom-24 xl:-bottom-40`}>
      {label}
  </div>
  );
}
