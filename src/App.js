import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Splash from "./components/Splash";


export default function App() {
  return (
    <div className="px-4 md:px-20">
      <Splash />
      <Resume />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  );
}
