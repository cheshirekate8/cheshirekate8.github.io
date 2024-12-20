import SectionTitle from "./SectionTitle";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import ProjectMgmtScreenshot from "../images/Project-Mgmt-Screenshot.png";
import Pattern2 from "../images/pat-2.png";

export default function Portfolio() {
  const cardArray = [
    {
      src: ProjectMgmtScreenshot,
      alt: "Project Managment App screenshot",
      width: 3456,
      height: 1775,
      langs: "React.js, GraphQL, MongoDB, Bootstrap, Vercel",
      projName: "Project Management App",
      copy: "Streamlined project management app tracking clients and projects with React and GraphQL.",
      href: "https://project-mgmt-app-client-three.vercel.app/",
      underConstruction: false,
    },
  ];

  const Card = ({
    src,
    alt,
    width,
    height,
    langs,
    projName,
    copy,
    href,
    underConstruction,
  }) => {
    const linkText = underConstruction
      ? "🚧 Under Construction 🚧"
      : "See Project";
    return (
      <a
        className={`group w-80 rounded-3xl bg-zinc-700 relative p-7 overflow-hidden flex flex-col justify-between ${
          underConstruction ? "hover:cursor-default" : ""
        }`}
        href={`${href}`}
        onClick={(e) => {
          if (underConstruction === false) return;
          e.preventDefault();
        }}
      >
        <div className="w-full">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-2xl"
          />
        </div>
        <div>
          <div className="text-cyan-500 font-semibold my-2">{langs}</div>
          <div className="text-xl font-bold my-2">{projName}</div>
          <div className="my-2">{copy}</div>
          <div
            className={`font-semibold flex ml-4 items-center ${
              underConstruction ? "text-orange-300" : ""
            }`}
            href={`${href}`}
          >
            {linkText}
            <span hidden={underConstruction}>
              <ArrowRightCircleIcon className="text-4xl text-cyan-500 ml-4 ease-in-out duration-500 group-hover:translate-x-4" />
            </span>
          </div>
          <div className="pattern absolute -bottom-5 -right-5 invert w-[120px] h-[120px] opacity-30">
            <img
              src={Pattern2}
              width={160}
              height={160}
              alt="dotted pattern 2"
              loading="lazy"
            />
          </div>
        </div>
      </a>
    );
  };

  return (
    <div
      className="relative font-jost m-8 min-h-screen flex justify-center z-10"
      id="portfolio"
    >
      <div className="flex flex-col justify-center items-center max-w-7xl m-auto">
        <SectionTitle
          label="Portfolio"
          blueText="My"
          whiteText="Projects and Work"
        />
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
              underConstruction={card.underConstruction}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
