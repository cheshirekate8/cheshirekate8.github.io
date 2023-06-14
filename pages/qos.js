import { Fade } from "react-reveal";
import Image from "next/image";

// TODO:  Come back when QoS2 is done

export default function QoS() {
  return (
    <Fade>
      <div className="min-h-screen flex flex-col justify-center items-center" id="qos">
        <div>QoS</div>
        <Image src="/images/under-construction.svg" width={750} height={750} alt="Under Construction Image" />
      </div>
    </Fade>
  );
}
