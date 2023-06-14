import { Fade } from "react-reveal";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// TODO:  write CAH copy
// TODO:  link to CAH
// TODO:  hover links animations
// TODO:  Update Copy when complete
// TODO:  Update Copy pictures complete

export default function CAH() {
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
          }, 3000);
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
        className="mb-4 min-h-screen flex flex-col justify-center items-center font-jost lg:text-lg"
        id="sandstone"
      >
        <div className="w-5/6 lg:w-full text-center mt-10 mx-auto mb-4 lg:mb-10">
          <div className="font-bold px-2 uppercase text-cyan-600 text-7xl ease-in-out duration-500">
            Cards Against Humanity
          </div>
          <div className="font-caveat px-2 capitalize text-6xl ease-in-out duration-500">
            Deck Builder
          </div>
        </div>
        <div className="w-full inline-flex flex-col-reverse lg:block justify-center max-w-7xl">
          <div className="w-full float-left px-4 lg:pl-0 lg:pr-8 lg:pb-4 lg:w-[50vw]">
            <div ref={sliderRef} className="keen-slider rounded mb-4">
              <div className="keen-slider__slide number-slide1 rounded">
                <Image
                  src="/images/CAHFrontPage.png"
                  className="hidden sm:block"
                  width={2000}
                  height={240}
                  alt="Kin Euphorics Webpage"
                />
                <Image
                  src="/images/CAHFrontPageMobile.png"
                  className="block sm:hidden"
                  width={750}
                  height={1334}
                  alt="Kin Euphorics Webpage"
                />
              </div>
              <div className="keen-slider__slide number-slide2 rounded">
                <Image
                  src="/images/CAHChoice.png"
                  className="hidden sm:block"
                  width={2000}
                  height={240}
                  alt="Lulu PDP"
                />
                <Image
                  src="/images/CAHChoiceMobile.png"
                  className="block sm:hidden"
                  width={750}
                  height={1334}
                  alt="Lulu PDP Mobile"
                />
              </div>
              <div className="keen-slider__slide number-slide3 rounded">
                <Image
                  src="/images/CAHBlackCards.png"
                  className="hidden sm:block"
                  width={2000}
                  height={240}
                  alt="Lulu Nav"
                />
                <Image
                  src="/images/CAHBlackCardsMobile.png"
                  className="block sm:hidden"
                  width={750}
                  height={1334}
                  alt="Lulu Nav Mobile"
                />
              </div>
            </div>
            <div ref={thumbnailRef} className="keen-slider rounded thumbnail">
              <div className="keen-slider__slide number-slide1 rounded">
                <Image
                  src="/images/CAHFrontPage.png"
                  className="hidden sm:block"
                  width={2000}
                  height={240}
                  alt="Kin Euphorics Webpage"
                />
                <Image
                  src="/images/CAHFrontPageMobile.png"
                  className="block sm:hidden"
                  width={750}
                  height={1334}
                  alt="Kin Euphorics Mobile"
                />
              </div>
              <div className="keen-slider__slide number-slide2 rounded">
                <Image
                  src="/images/CAHChoice.png"
                  className="hidden sm:block"
                  width={2000}
                  height={240}
                  alt="Lulu PDP"
                />
                <Image
                  src="/images/CAHChoiceMobile.png"
                  className="block sm:hidden"
                  width={750}
                  height={1334}
                  alt="Lulu PDP Mobile"
                />
              </div>
              <div className="keen-slider__slide number-slide3 rounded">
                <Image
                  src="/images/CAHBlackCards.png"
                  className="hidden sm:block"
                  width={2000}
                  height={240}
                  alt="Lulu Nav"
                />
                <Image
                  src="/images/CAHBlackCardsMobile.png"
                  className="block sm:hidden"
                  width={750}
                  height={1334}
                  alt="Lulu Nav Mobile"
                />
              </div>
            </div>
          </div>
          <div className="w-full p-4 lg:p-0">
            <div className="flex items-center justify-center mb-4">
              <span className="font-bold px-2 uppercase text-cyan-600 ease-in-out duration-500 text-2xl ">
                Under
              </span>
              <span className="font-caveat px-2 capitalize ease-in-out duration-500 text-3xl">
                Construction
              </span>
            </div>
            <div>
              One day while playing around on the internet, I discovered{" "}
              <a href="https://crhallberg.com/cah/">
                Chris Halber's JSON Against Humanity Project
              </a>
              . It's a collection of every single Cards Against Humanity card
              ever created, all in one easy to use JSON. It got me so inspired,
              I decided to create my own Deck Builder using it! It is currently
              under construction, but soon I plan to implement chosing your own
              black cards, choosing your own white cards, and exporting your own
              deck in the same format as JSON Against Humanity. 
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
