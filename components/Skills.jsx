import { Fade } from "react-reveal";
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiRedux,
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiJest,
  SiNodedotjs,
  SiSequelize,
  SiGraphql,
  SiGoland,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiGithub,
  SiEslint,
  SiHeroku,
  SiCypress,
  SiShopify,
  SiVercel,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
import BottomText from "./BottomText";

//TODO: rewrite language copy
export default function Skills() {
  const iconAndWordArr = [
    {
      icon: <SiTypescript className="text-cyan-600 mr-2" />,
      word: "Typescript",
    },
    { icon: <SiRedux className="text-cyan-600 mr-2" />, word: "Redux" },
    { icon: <SiCss3 className="text-cyan-600 mr-2" />, word: "CSS3" },
    { icon: <SiNodedotjs className="text-cyan-600 mr-2" />, word: "Node.js" },
    { icon: <SiHtml5 className="text-cyan-600 mr-2" />, word: "HTML5" },
    { icon: <SiJest className="text-cyan-600 mr-2" />, word: "Jest" },
    { icon: <SiCypress className="text-cyan-600 mr-2" />, word: "Cypress" },
    { icon: <SiSequelize className="text-cyan-600 mr-2" />, word: "Sequelize" },
    { icon: <SiGraphql className="text-cyan-600 mr-2" />, word: "GraphQL" },
    { icon: <SiGoland className="text-cyan-600 mr-2" />, word: "Goland" },
    {
      icon: <SiPostgresql className="text-cyan-600 mr-2" />,
      word: "PostgreSQL",
    },
    { icon: <SiExpress className="text-cyan-600 mr-2" />, word: "Express" },
    { icon: <SiGit className="text-cyan-600 mr-2" />, word: "Git" },
    { icon: <SiGithub className="text-cyan-600 mr-2" />, word: "GitHub" },
    { icon: <SiEslint className="text-cyan-600 mr-2" />, word: "ESLint" },
    { icon: <SiHeroku className="text-cyan-600 mr-2" />, word: "Heroku" },
    { icon: <SiVercel className="text-cyan-600 mr-2" />, word: "Vercel" },
  ];

  const skillsComponentArray = [
    {
      word: "Javascript",
      icon: <SiJavascript className="text-cyan-600 mr-2" />,
      percent: 90,
      copy: "2+ years of experience, one of my base languages. Used at Dolthub, Sandstone, and in personal projects",
    },
    {
      word: "React",
      icon: <SiReact className="text-cyan-600 mr-2" />,
      percent: 90,
      copy: "2+ years of experience, one of my base languages. Used at Dolthub, Sandstone, and in personal projects",
    },
    {
      word: "Tailwind & CSS",
      icon: <SiTailwindcss className="text-cyan-600 mr-2" />,
      percent: 85,
      copy: "2+ years of experience, one of my base languages. Used at Dolthub, Sandstone, and in personal projects",
    },
    {
      word: "Shopify & Liquid",
      icon: <SiShopify className="text-cyan-600 mr-2" />,
      percent: 70,
      copy: "1 year of experience, used at Sandstone. Previous clients include Google, Lulu and Georgia, and Kin Euphorics.",
    },
  ];

  const IconAndWord = ({ word, icon }) => {
    return (
      <div className="flex items-center font-bold text-lg mb-2">
        {icon}
        {word}
      </div>
    );
  };

  const SkillComponent = ({ word, icon, percent, copy }) => {
    return (
      <div className="mx-4 mb-16">
        <div className="flex justify-between items-center font-bold mx-4 text-lg">
          <IconAndWord icon={icon} word={word} />
          <span>
            <span>{percent}</span>
            <span className="text-cyan-600">%</span>
          </span>
        </div>
        <div className="mx-4 mb-8 h-28">{copy}</div>
        <div className="my-4">
          <div className="gray-line border-b-2"></div>
          <div
            className="colored-line relative flex justify-end border-b-2 border-cyan-600 -top-0.5"
            style={{ width: `${percent}%` }}
          >
            <div className="dot w-8 h-8 border-2 border-black rounded-full drop-shadow-hard bg-sky-100 absolute -bottom-4 -right-4 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fade>
      <div className="relative font-jost " id="skills">
        <div className="flex flex-col justify-center items-center m-auto xl:min-h-screen">
          <SectionTitle
            label="Professional Skills"
            blueText="My"
            whiteText="Strongest Languages"
          />
          <div className="w-full sm:grid sm:grid-cols-2 xl:grid-cols-3">
            {skillsComponentArray.map((item) => {
              return (
                <SkillComponent
                  word={item.word}
                  icon={item.icon}
                  percent={item.percent}
                  copy={item.copy}
                  key={item.word}
                />
              );
            })}
            <div className="mx-4 mb-16 text-center sm:col-span-2 xl:mx-16">
              <div className="text-2xl font-caveat mb-2">Familiar with:</div>
              <div className="" style={{ columnCount: 3 }}>
                {iconAndWordArr.map((item) => {
                  return (
                    <IconAndWord
                      icon={item.icon}
                      word={item.word}
                      key={item.word}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <BottomText label="Skills" />
      </div>
    </Fade>
  );
}
