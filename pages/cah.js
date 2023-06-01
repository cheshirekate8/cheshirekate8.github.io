import { Fade } from "react-reveal";
import Image from "next/image";

export default function CAH() {
  return (
    <Fade>
      <div className="min-h-screen flex flex-col justify-center items-center" id="cah">
        <div>CAH</div>
        <Image src="/images/under-construction.svg" width={750} height={750} alt="Under Construction Image" />
      </div>
    </Fade>
  );
}
