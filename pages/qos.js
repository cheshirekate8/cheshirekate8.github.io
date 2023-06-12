import { Fade } from "react-reveal";
import Image from "next/image";

// TODO:  Copy CAH code
// TODO:  Get QoS pictures
// TODO:  Write QoS copy
// TODO:  Final Checks

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
