import { Fade } from "react-reveal";
import Image from "next/image";
import { FaMap, FaEnvelope, FaPhone } from "react-icons/fa";

export default function SectionTitle({label, blueText, whiteText}) {


  return (
    <>
        <div className="mt-8 text-2xl uppercase font-bold transform ease-in-out duration-500 md:text-3xl lg:text-5xl ">
          {label}
        </div>
        <div className="flex items-center justify-center mb-8">
          <span className="font-bold text-base uppercase text-cyan-600 transform ease-in-out duration-500 md:text-base ">
            {blueText}{" "}
          </span>
          <span className="font-caveat px-4 capitalize text-2xl transform ease-in-out duration-500 md:text-3xl">
            {whiteText}
          </span>
        </div>
    </>
  );
}
