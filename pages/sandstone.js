
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

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
    <div
      className="min-h-screen flex flex-col justify-center items-center font-jost lg:text-lg mb-8"
      id="sandstone"
    >
      <div className="w-5/6 lg:w-full text-center mt-10 mx-auto mb-4 lg:mb-10">
        <Image
          src="/images/sandstoneLogo.svg"
          width={750}
          height={90}
          alt="Sandstone Logo"
          className="mt-20 lg:mt-0 mx-auto mb-4"
        />
      </div>
      <div className="w-full inline-flex flex-col-reverse lg:block justify-center max-w-7xl">
        <div className="w-full float-left px-4 lg:pl-0 lg:pr-8 lg:4 lg:w-[50vw] order-1">
          <div ref={sliderRef} className="keen-slider rounded mb-4">
            <div className="keen-slider__slide number-slide1 rounded">
              <Image
                src="/images/KinEuphorics.png"
                className="hidden sm:block"
                width={2000}
                height={240}
                alt="Kin Euphorics Webpage"
              />
              <Image
                src="/images/KinEuphoricsMobile.png"
                className="block sm:hidden"
                width={750}
                height={1334}
                alt="Kin Euphorics Webpage"
              />
            </div>
            <div className="keen-slider__slide number-slide2 rounded">
              <Image
                src="/images/luluPDPAfter.png"
                className="hidden sm:block"
                width={2000}
                height={240}
                alt="Lulu PDP"
              />
              <Image
                src="/images/luluPDPMobile.png"
                className="block sm:hidden"
                width={750}
                height={1334}
                alt="Lulu PDP Mobile"
              />
            </div>
            <div className="keen-slider__slide number-slide3 rounded">
              <Image
                src="/images/luluNavAfter.webp"
                className="hidden sm:block"
                width={2000}
                height={240}
                alt="Lulu Nav"
              />
              <Image
                src="/images/luluNavMobile.png"
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
                src="/images/KinEuphorics.png"
                className="hidden sm:block"
                width={2000}
                height={240}
                alt="Kin Euphorics Webpage"
              />
              <Image
                src="/images/KinEuphoricsMobile.png"
                className="block sm:hidden"
                width={750}
                height={1334}
                alt="Kin Euphorics Mobile"
              />
            </div>
            <div className="keen-slider__slide number-slide2 rounded">
              <Image
                src="/images/luluPDPAfter.png"
                className="hidden sm:block"
                width={2000}
                height={240}
                alt="Lulu PDP"
              />
              <Image
                src="/images/luluPDPMobile.png"
                className="block sm:hidden"
                width={750}
                height={1334}
                alt="Lulu PDP Mobile"
              />
            </div>
            <div className="keen-slider__slide number-slide3 rounded">
              <Image
                src="/images/luluNavAfter.webp"
                className="hidden sm:block"
                width={2000}
                height={240}
                alt="Lulu Nav"
              />
              <Image
                src="/images/luluNavMobile.png"
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
              April 2021
            </span>
            <span className="font-caveat px-2 capitalize ease-in-out duration-500 text-3xl">
              -
            </span>
            <span className="font-caveat px-2 capitalize ease-in-out duration-500 text-3xl">
              Present
            </span>
          </div>
          <div>
            <p>
              During my time at Sandstone, one project that I am incredibly
              proud of is the comprehensive redesign we spearheaded for Lulu
              and Georgia. Our primary goal was to bring a modern touch to
              their online presence by revamping the Product Display Page
              (PDP) and Navigation bar. We approached the redesign with a keen
              focus on enhancing user experience, ensuring a cleaner and more
              intuitive flow. By strategically restructuring the content and
              incorporating captivating animations that responded to user
              actions, we achieved a seamless browsing experience for
              visitors. The result was not only a visually stunning
              transformation but also an elevated platform for users to
              effortlessly explore Lulu and Georgia&apos;s curated product
              offerings.
            </p>
            <br />
            <p>
              Another remarkable project I had the privilege to work on was
              with Kin, a brand-new client, to develop a custom PDP for their
              exclusive collaboration with Mayfair. Our goal was to create a
              visually striking and engaging PDP that truly captured the
              essence of the collaboration. However, before diving into the
              project, we needed to set up a GitHub repository for Kin as they
              did not have one in place. This initial setup phase allowed us
              to establish a streamlined workflow for effective collaboration.
              As we delved deeper into the project, we encountered a few
              challenges with the way their products were structured. Some
              features were configured through code, some through an admin
              interface, and others through a custom metafields app they
              utilized. Despite these initial complexities, with the guidance
              and mentorship of my boss, Andrew, I quickly adapted and found
              efficient ways to navigate and work with the existing setup.
              Ultimately, we successfully delivered a custom PDP that
              showcased the vibrant Mayfair x Kin collaboration, captivating
              users and driving engagement.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
