import Image from "next/image";
import { Fade } from "react-reveal";
import { SlSocialGithub, SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import Link from "next/link";
import BottomText from "./BottomText";

export default function Splash() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dev-katie-young/",
      icon: (
        <SlSocialLinkedin
          alt="linkedin icon"
          className="mx-3 hover:text-cyan-600 ease-in-out duration-200 "
        />
      ),
    },
    {
      href: "https://github.com/cheshirekate8",
      icon: (
        <SlSocialGithub
          alt="github icon"
          className="mx-3 hover:text-cyan-600 ease-in-out duration-200 "
        />
      ),
    },
    {
      href: "mailto:katie.f.young@me.com",
      icon: (
        <SlEnvolope
          alt="email icon"
          className="mx-3 hover:text-cyan-600 ease-in-out duration-200 "
        />
      ),
    },
  ];
  return (
      <div
        className="relative pt-28 px-4 flex flex-col min-h-screen xl:grid xl:grid-rows-2 xl:grid-cols-2 xl:pt-0 xl:-top-16 animate-reveal"
        id="splash"
      >
        <div className="uppercase flex flex-col justify-center text-center font-jost tracking-wide -mb-8 sm:-mb-20 xl:mb-0 xl:row-start-1 xl:col-start-1 xl:justify-end">
          <div className="text-[13px] ease-in-out duration-500 md:text-base font-bold">
            <span className="">Hello, </span>
            <span className="text-cyan-600">my name is</span>
          </div>
          <div className="text-5xl ease-in-out duration-500 md:text-6xl font-black my-4">
            <span className="text-shadow-black">Katie </span>
            <span className="text-shadow-black text-cyan-600">Young</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="font-bold text-[13px] ease-in-out duration-500 md:text-base ">
              I am a
            </span>
            <span className="font-caveat px-4 capitalize text-2xl ease-in-out duration-500 md:text-3xl">
              Web Developer
            </span>
          </div>
        </div>
        <div className="flex relative w-min m-auto xl:row-start-1 xl:col-start-2 xl:row-span-2">
          <div className="pattern absolute invert right-3 top-28 opacity-30 w-[130px] h-130px] md:w-[260px] md:h-[260px]">
            <Image src="/images/pat-1.png" width={260} height={260} alt="" priority />
          </div>
          <div className="pattern absolute -bottom-6 -right-8 invert opacity-30 w-[80px] h-[80px] md:w-[160px] md:h-[160px]">
            <Image src="/images/pat-2.png" width={160} height={160} alt="" priority />
          </div>
          <div className="pattern absolute bottom-0 -left-12 invert opacity-30 w-[80px] h-[80px] md:w-[160px] md:h-[160px]">
            <Image src="/images/pat-2.png" width={160} height={160} alt="" priority />
          </div>
          <div className="w-[350px] h-[350px] relative mt-28 ease-in-out duration-500 md:w-[500px] md:h-[500px] md:mt-56">
            <div className="bg-cyan-600 rounded-full w-full h-full"></div>
            <Image
              src="/images/profile1.png"
              alt="<b>Katie</b> Young"
              width={1200}
              height={1200}
              className="rounded-b-full absolute bottom-0 m-auto"
              priority
            />
            <div className="border bg-zinc-800 absolute bottom-8 rounded-full px-6 py-2 flex items-center font-jost font-bold">
              <div className="text-2xl pr-2 justify-start ease-in-out duration-500 md:text-4xl">
                <span className="">2 </span>
                <span className="text-cyan-600">+ </span>
              </div>
              <div className="uppercase font-semibold text-[9px] flex flex-col ease-in-out duration-500 md:text-sm">
                <span className="">years of</span>
                <span className="text-cyan-600">experience</span>
              </div>
            </div>
            <div className="border bg-zinc-800 absolute bottom-4 right-0 rounded-full px-6 py-2 flex items-center font-jost font-bold">
              <div className="uppercase font-semibold text-[9px] flex flex-col text-right ease-in-out duration-500 md:text-sm">
                <span className="">Currently employed,</span>
                <span className="text-cyan-600">interview ready</span>
              </div>
            </div>
          </div>
        </div>
        <div className="font-normal font-jost normal-case text-center pt-10 mb-12 mt-8 max-w-2xl m-auto text-base md:text-lg xl:mb-0 xl:pt-0">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Originally from Miami, FL, I'm a Fullstack Web Developer with a passion for Frontend. Since graduating App Academy in 2021, I've completed an internship at Dolthub and am currently working at Sandstone Digital Agency. In my spare time I perform stand-up comedy, and play videogames. My current obsession is No Man's Sky, what's yours?
          <div className="py-8 md:py-16">
            <div className="flex justify-center text-4xl mb-8 md:mb-16">
              {socialLinks.map((socialLink, i) => {
                return (
                  <Link href={socialLink.href} key={`socialLink ${i}`}>
                    {socialLink.icon}
                  </Link>
                );
              })}
            </div>
            <a
              className="border bg-zinc-800 rounded-full px-6 py-2 flex items-center font-jost font-bold w-max justify-center m-auto ease-in-out duration-200 drop-shadow-hard -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 active:drop-shadow-none hover:bg-sky-900 md:text-lg md:px-12 md:py-4"
              href="KatieYoungResume.pdf"
              target="_blank"
              download
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
        <BottomText label="Web Developer" />
      </div>
  );
}
