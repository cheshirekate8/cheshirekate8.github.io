import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

export default function Resume() {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);

  const educationData = [
    {
      id: 1,
      title: "Web App Development",
      academy: "App Academy",
      dec: "Rigorous, +1000-hour software development program with <3% acceptance rate specializing in Web App Development.",
      startYear: "2021",
      endYear: "2021",
    },
    {
      id: 2,
      title: "B.A. of Theatre",
      academy: "Florida State University",
      dec: "Comprehensive study of the theatrical arts including acting, directing, stage production, and theoretical analysis of theatrical works.",
    },
    {
      id: 3,
      title: "High School",
      academy: "Miami Palmetto High",
      dec: "Why include my high school? Cause Jeff Bezos went here too, and it's a great conversation starter.",
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Lead Shopify Developer",
      company: "Art Brand Studios",
      dec: "Developed and maintained their 3 brand stores; Thomas Kinkade Studios, Wild Wings, and Art Brand Studios wholesale.",
      startYear: "2023",
      endYear: false,
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Sandstone",
      dec: "Worked with Shopify clients such as Google, Lulu and Georgia, and Kin Euphorics, and built internal marketing tools.",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "Dolthub",
      dec: "Increased test coverage by 15% and implemented several changes while collaborating with our graphic designer.",
      startYear: "2021",
      endYear: "2022",
    },
    {
      id: 4,
      title: "Assistant Software Engineer",
      company: "App Academy",
      dec: "As a recent grad, mentored and collaborated with job-seeking students to better prepare them for the job search.",
      startYear: "2021",
      endYear: "2021",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative font-jost z-10"
      id="resume"
    >
      <div className="flex flex-col justify-center items-center max-w-7xl m-auto">
        <SectionTitle label="Resume" blueText="My" whiteText="Story" />
        <div className="flex flex-col sm:flex-row items-cente mb-8">
          <a
            className="border bg-zinc-800 rounded-full px-6 py-2 font-jost font-bold w-max justify-center mb-4 sm:mb-0 sm:mr-8 ease-in-out duration-200 drop-shadow-hard -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 active:drop-shadow-none hover:bg-sky-900 md:text-lg md:px-12 md:py-4"
            href="KatieYoung0825Resume.pdf"
            target="_blank"
            download
          >
            DOWNLOAD PDF
          </a>
          {/* <a
            className="border bg-zinc-800 rounded-full px-6 py-2 font-jost font-bold w-max justify-center ease-in-out duration-200 drop-shadow-hard -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 active:drop-shadow-none hover:bg-sky-900 md:text-lg md:px-12 md:py-4"
            href="KatieYoungResume.docx"
            target="_blank"
            download
          >
            DOWNLOAD DOCX
          </a> */}
        </div>
        <div className="flex flex-wrap items-start">
          <div className="w-full md:w-1/2 px-5 pb-16">
            <h5
              className="text-2xl font-bold pb-8 text-center border-b-2 border-b-white"
              data-animate="active"
            >
              <span> Experience </span>
            </h5>
            <div className="history-items">
              {experienceData.map((experience) => (
                <div className="relative border-r-2" key={experience.id}>
                  <div
                    className={`border-b-2 pr-4 ease-in-out duration-500 ${
                      experience.id === experienceToggle
                        ? "h-64 md:h-[17.5rem] lg:h-64 xl:h-60 overflow-scroll"
                        : "h-20 overflow-hidden"
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`text-lg font-bold py-6`}
                      onClick={() => {
                        experience.id === experienceToggle
                          ? setExperienceToggle(null)
                          : setExperienceToggle(experience.id);
                      }}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="font-caveat text-2xl">
                        <span> {experience.company} </span>
                      </div>
                      <div className="pb-4 font-semibold">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="pb-8">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="dot text-xl w-8 h-8 border-2 border-black rounded-full drop-shadow-hard bg-sky-100 hover:bg-sky-300 absolute -bottom-4 -right-4 text-black flex justify-center items-center z-20 ease-in-out duration-500 transform"
                    onClick={() => {
                      experience.id === experienceToggle
                        ? setExperienceToggle(null)
                        : setExperienceToggle(experience.id);
                    }}
                    aria-label="Expand section"
                  >
                    <MinusIcon
                      className={`ease-in-out duration-200 absolute ${
                        experience.id === experienceToggle
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    <PlusIcon
                      className={`ease-in-out duration-200 absolute ${
                        experience.id === experienceToggle
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-5 pb-16">
            <h5
              className="text-2xl font-bold pb-8 text-center border-b-2"
              data-animate="active"
            >
              <span> Education </span>
            </h5>
            <div className="history-items">
              {educationData.map((education, i) => (
                <div className="relative border-r-2" key={education.id}>
                  <div
                    className={`border-b-2 pr-4 ease-in-out duration-500 ${
                      educationToggle === education.id
                        ? "h-64 md:h-[17.5rem] lg:h-64 xl:h-60 overflow-scroll"
                        : "h-20 overflow-hidden"
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`text-lg font-bold py-6`}
                      onClick={() => {
                        education.id === educationToggle
                          ? setEducationToggle(null)
                          : setEducationToggle(education.id);
                      }}
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="font-caveat text-2xl">
                        <span> {education.title} </span>
                      </div>
                      <div className="pb-4 font-semibold">
                        {education.startYear ? (
                          <span>
                            {" "}
                            {education.startYear} - {education.endYear}{" "}
                          </span>
                        ) : null}
                      </div>
                      <div className="pb-8">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="dot ease-in-out duration-500 transform text-xl w-8 h-8 border-2 border-black rounded-full drop-shadow-hard bg-sky-100 hover:bg-sky-300 absolute -bottom-4 -right-4 text-black flex justify-center items-center z-20"
                    onClick={() => {
                      education.id === educationToggle
                        ? setEducationToggle(null)
                        : setEducationToggle(education.id);
                    }}
                    aria-label="Expand section"
                  >
                    <MinusIcon
                      className={`ease-in-out duration-200 absolute  ${
                        education.id === educationToggle
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    <PlusIcon
                      className={`ease-in-out duration-200 absolute ${
                        education.id === educationToggle
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
