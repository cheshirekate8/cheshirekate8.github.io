import { Fade } from "react-reveal";
import Image from "next/image";

export default function Lulu() {
  return (
    <Fade>
      <div className="min-h-screen flex flex-col justify-center items-center" id="lulu">
        <div>Lulu</div>
        <Image src="/images/under-construction.svg" width={750} height={750} alt="Under Construction Image" />
      </div>
    </Fade>
  );
}
