import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Splash from "../components/Splash";

export default function Home() {
  return (
    <div>
      <Splash />
      <Resume />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
}
