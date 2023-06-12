import { Fade } from "react-reveal";
import Image from "next/image";
import { TbArrowRightCircle } from "react-icons/tb";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import BottomText from "./BottomText";

// TODO:  Final Checks

export default function Portfolio() {
  const cardArray = [
    {
      src: "/images/SandstoneScreenshot.png",
      alt: "Sandstone homepage screenshot",
      width: 3456,
      height: 1775,
      langs: "Shopify, Liquid, React, Tailwind",
      projName: "Sandstone",
      copy: "A showcase of my work with Kin, Lulu and Georgia and other internal projects.",
      href: "sandstone",
    },
    {
      src: "/images/CAHDeckBuilder.png",
      alt: "Cards Against Humanity Deck Builder",
      width: 3456,
      height: 1775,
      langs: "React, Tailwind, JSON",
      projName: "CAH Custom Deck Builder",
      copy: "A personal project where a user can create their own custom Cards Against Humanity deck or pack.",
      href: "cah",
    },
    {
      src: "/images/qos1.webp",
      alt: "Queen of Sauce Recipe App",
      width: 3456,
      height: 1775,
      langs: "React, Tailwind, JSON",
      projName: "Queen of Sauce Cooking",
      copy: "My capstone project for App Academy where I created a cooking app based on the Stardew Valley recipes.",
      href: "qos",
    },
  ];

  const Card = ({ src, alt, width, height, langs, projName, copy, href }) => {
    return (
      <Link className="group w-80 rounded-3xl bg-zinc-700 relative p-7 overflow-hidden flex flex-col justify-between" href={`/${href}`} >
        <div className="w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-2xl"
          />
        </div>
        <div>
          <div className="text-cyan-600 font-semibold my-2">{langs}</div>
          <div className="text-xl font-bold my-2">{projName}</div>
          <div className="my-2">{copy}</div>
          <div
            className="font-semibold flex ml-4 items-center"
            href={`/${href}`}
          >
            See Project
            <TbArrowRightCircle className="text-4xl text-cyan-600 ml-4 group-hover:translate-x-4 ease-in-out duration-500" />
          </div>
          <div className="pattern absolute -bottom-5 -right-5 invert w-[120px] h-[120px] opacity-30">
            <Image
              src="/images/pat-2.png"
              width={160}
              height={160}
              priority
              alt="dotted pattern 2"
            />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <Fade>
      <div
        className="relative font-jost m-8 min-h-screen flex justify-center"
        id="portfolio"
      >
        <div className="flex flex-col justify-center items-center max-w-7xl m-auto">
          <SectionTitle label="Portfolio" blueText="My" whiteText="Projects and Work" />
          <div className="mb-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {cardArray.map((card) => (
              <Card
                src={card.src}
                alt={card.alt}
                width={card.width}
                height={card.height}
                langs={card.langs}
                projName={card.projName}
                copy={card.copy}
                href={card.href}
                key={card.alt}
              />
            ))}
          </div>
        </div>
        <BottomText label="Projects" />
      </div>
    </Fade>
  );
}
