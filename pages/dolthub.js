import { Fade } from "react-reveal";
import Image from "next/image";

export default function Dolthub() {
  return (
    <Fade>
      <div className="min-h-screen flex flex-col justify-center items-center" id="dolthub">
        <div>Dolthub</div>
        <div className="">
          <div className="">
            <div className="">
              Dolthub was an amazing company to intern for. They have a
              culture of fostering new talent, and made sure to train me in
              every language they used. My biggest consumer facing project
              with them was this custom carousel for the homepage. I initially
              was leaning towards using a package to make it easy on myself,
              but my mentor Taylor strongly suggested I write it myself. I&apos;m
              glad she did, becuase this project was the first one I did where
              I really started to fall in love with animations and CSS.
              <div className="">
                <a href="https://www.dolthub.com">Demo Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
