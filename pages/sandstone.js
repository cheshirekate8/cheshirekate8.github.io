import { Fade } from "react-reveal";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import SectionTitle from "../components/SectionTitle";

export default function Sandstone() {
  function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active");
        });
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active");
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx);
          });
        });
      }

      slider.on("created", () => {
        if (!mainRef.current) return;
        addActive(slider.track.details.rel);
        addClickEvents();
        mainRef.current.on("animationStarted", (main) => {
          removeActive();
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next));
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        });
      });
    };
  }

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Fade>
      <div
        className="min-h-screen flex flex-col justify-center items-center font-jost lg:text-lg"
        id="sandstone"
      >
        <div className="w-5/6 lg:w-full">
          <Image
            src="/images/sandstoneLogo.svg"
            width={750}
            height={90}
            alt="Sandstone Logo"
            className="mt-20 lg:mt-0 mx-auto mb-4"
          />
        </div>
        <div className="flex items-center justify-center mb-8">
          <span className="font-bold px-2 uppercase text-cyan-600 ease-in-out duration-500 text-2xl ">
            April 2021
          </span>
          <span className="font-caveat px-2 capitalize ease-in-out duration-500 text-3xl">
            -
          </span>
          <span className="font-caveat px-2 capitalize ease-in-out duration-500 text-3xl">
            Present
          </span>
        </div>
        <div className="w-full inline-flex flex-col-reverse lg:flex-row justify-center gap-12 px-4 md:px-0">
          <div className="DESKTOP w-full lg:w-1/2 hidden sm:block">
            <div ref={sliderRef} className="keen-slider mb-4">
              <div className="keen-slider__slide number-slide1">
                <Image
                  src="/images/KinEuphorics.png"
                  width={2000}
                  height={240}
                  alt="Kin Euphorics Webpage"
                />
              </div>
              <div className="keen-slider__slide number-slide3">
                <Image
                  src="/images/luluPDPAfter.png"
                  width={2000}
                  height={240}
                  alt="Lulu PDP"
                />
              </div>
              <div className="keen-slider__slide number-slide5">
                <Image
                  src="/images/luluNavAfter.webp"
                  width={2000}
                  height={240}
                  alt="Lulu Nav"
                />
              </div>
            </div>
            <div ref={thumbnailRef} className="keen-slider thumbnail">
              <div className="keen-slider__slide number-slide1">
                <Image
                  src="/images/KinEuphorics.png"
                  width={2000}
                  height={240}
                  alt="Kin Euphorics Webpage"
                />
              </div>
              <div className="keen-slider__slide number-slide3">
                <Image
                  src="/images/luluPDPAfter.png"
                  width={2000}
                  height={240}
                  alt="Lulu PDP"
                />
              </div>
              <div className="keen-slider__slide number-slide5">
                <Image
                  src="/images/luluNavAfter.webp"
                  width={2000}
                  height={240}
                  alt="Lulu Nav"
                />
              </div>
            </div>
          </div>
          <div className="MOBILE w-full mb-4 lg:w-1/2 sm:hidden">
            <div ref={sliderRef} className="keen-slider mb-4">
              <div className="keen-slider__slide number-slide2">
                <Image
                  src="/images/KinEuphoricsMobile.png"
                  width={750}
                  height={1334}
                  alt="Kin Euphorics Webpage"
                />
              </div>
              <div className="keen-slider__slide number-slide4">
                <Image
                  src="/images/luluPDPMobile.png"
                  width={750}
                  height={1334}
                  alt="Lulu PDP Mobile"
                />
              </div>
              <div className="keen-slider__slide number-slide6">
                <Image
                  src="/images/luluNavMobile.png"
                  width={2000}
                  height={240}
                  alt="Lulu Nav Mobile"
                />
              </div>
            </div>
            <div ref={thumbnailRef} className="keen-slider thumbnail">
              <div className="keen-slider__slide number-slide2">
                <Image
                  src="/images/KinEuphoricsMobile.png"
                  width={2000}
                  height={240}
                  alt="Kin Euphorics Mobile"
                />
              </div>
              <div className="keen-slider__slide number-slide4">
                <Image
                  src="/images/luluPDPMobile.png"
                  width={2000}
                  height={240}
                  alt="Lulu PDP Mobile"
                />
              </div>
              <div className="keen-slider__slide number-slide6">
                <Image
                  src="/images/luluNavMobile.png"
                  width={2000}
                  height={240}
                  alt="Lulu Nav Mobile"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            During my time at Sandstone, there are 3 projects that I am most
            proud of thus far. Fist was for Lulu and Georgia, where we
            completely redesigned their Product Display Page and their
            Navigation bar. Second was for Kin, a brand new client who charged
            us with building their custom PDP for the Mayfair x Kin collab.
            Lastly building our internal marketing tool, a fully customizable
            generative website to help Sandstone connect with clients on a
            personalized level.
          </div>
        </div>
      </div>
    </Fade>
  );
}
