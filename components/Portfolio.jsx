import { Fade } from "react-reveal";
import Image from "next/image";
import { TbArrowRightCircle } from "react-icons/tb";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import BottomText from "./BottomText";

//TODO: Lulu Project Page
//TODO: Dolthub Project Page
//TODO: CAH Project Page

export default function Portfolio() {
  const cardArray = [
    {
      src: "/images/luluPDPAfter.webp",
      alt: "Lulu And Georgia Product Display Page",
      width: 3456,
      height: 1775,
      langs: "Shopify, Liquid, Tailwind",
      projName: "Lulu and Georgia",
      copy: "I took on 2 major projects while with Lulu and Georgia, redesigns of the Product Display Page and Navigation.",
      href: "lulu",
    },
    {
      src: "/images/DolthubCarousel.png",
      alt: "Dolthub Carousel",
      width: 3455,
      height: 1790,
      langs: "Typescript, React, Tailwind, Go, Dolt",
      projName: "Dolthub Carousel",
      copy: "At Dolthub I was tasked with creating a custom carousel to help introduce our product to new users.",
      href: "dolthub",
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
