import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [noTouch, setNoTouch] = useState(false);

  const router = useRouter();

  const navLinkArr = [
    {
      handleVar: "skills",
      label: "Skills",
    },
    // {
    //   handleVar: "portfolio",
    //   label: "Portfolio",
    // },
    {
      handleVar: "resume",
      label: "Resume",
    },
    {
      handleVar: "contact",
      label: "Contact Me",
    },
    {
      handleVar: "splash",
      label: "Back to Top",
      last: true,
    },
  ];

  const handleClick = async (link) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    const ele = document.getElementById(link);
    ele.scrollIntoView({ behavior: "smooth" });
    setShowSidebar(false);
  };

  const NavLink = ({ handleVar, label, last }) => (
    <div className={last ? "my-24" : "my-8"}>
      <button
        onClick={() => handleClick(handleVar)}
        className="uppercase relative ease-in-out duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-hard hover:text-cyan-500"
        aria-label={label}
      >
        {label}
      </button>
    </div>
  );

  return (
    <div className="">
      <div
        onClick={() => setShowSidebar(false)}
        className={`w-screen h-screen fixed bg-black top-0 right-0 ease-in-out duration-1000 
      ${
        showSidebar
          ? "opacity-50 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      ></div>
      <div
        className={`top-0 right-0 w-min-content bg-sky-900 p-10 pl-16 pt-20 text-sky-100 fixed h-full overflow-hidden ease-in-out duration-1000 
        ${
          showSidebar ? "translate-x-0 skew-x-0" : "translate-x-extra skew-x-12"
        }`}
      >
        <div
          className={`flex h-full ease-in-out duration-500 ${
            showSidebar ? "opacity-100 delay-1000" : "opacity-0 delay-0"
          }`}
        >
          <div className={`flex flex-col`}>
            <div className="pattern absolute -top-[6.75rem] -left-[6.75rem] ">
              <Image src="/images/pat-1.png" width={250} height={250} alt="" />
            </div>
            <div className="dot w-8 h-8 border-2 border-black rounded-full drop-shadow-hard bg-sky-100 "></div>
            <div className="line border border-black h-full m-auto"></div>
            <div className="dot w-8 h-8 border-2 border-black rounded-full drop-shadow-hard bg-sky-100"></div>
          </div>
          <div className="pl-10 font-bold text-3xl font-jost overflow-scroll w-full">
            {navLinkArr.map((navLink) => (
              <NavLink
                handleVar={navLink.handleVar}
                label={navLink.label}
                last={navLink.last}
                key={navLink.handleVar}
              />
            ))}
          </div>
        </div>
      </div>
      <BiMenuAltRight
        onClick={() => {
          setShowSidebar(!showSidebar);
          setNoTouch(true);
          setTimeout(() => {
            setNoTouch(false);
          }, 1000);
        }}
        className={`flex text-4xl items-center cursor-pointer fixed right-10 top-6 ease-in-out duration-1000 
            ${noTouch ? "pointer-events-none	" : "pointer-events-auto"}
            ${showSidebar ? "text-sky-100" : "text-cyan-500"}`}
      />
    </div>
  );
};

export default Header;
