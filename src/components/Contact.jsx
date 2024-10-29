import { MapPinIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import SectionTitle from "./SectionTitle";
import BottomText from "./BottomText";

export default function Contact() {
  const contactItemArr = [
    {
      icon: <MapPinIcon className="text-white w-6" />,
      label: "Location",
      info: "Las Vegas, NV",
      href: "",
    },
    {
      icon: <EnvelopeIcon className="text-white w-6" />,
      label: "Email",
      info: "katie.f.young@me.com",
      href: "mailto:katie.f.young@me.com",
    },
    {
      icon: <PhoneIcon className="text-white w-6" />,
      label: "Phone",
      info: "937-239-2748",
      href: "tel:+19372392748",
    },
  ];

  const ContactItem = ({ icon, label, info, href }) => {
    return (
      <a
        className={`flex m-8 text-left group ${
          href ? "pointer-events-auto" : "pointer-events-none"
        }`}
        href={href}
      >
        <div className="flex items-center">
          <div className="dot w-14 h-14 border-2 border-white rounded-full drop-shadow-hard bg-cyan-500 group-hover:bg-sky-900 ease-in-out duration-200 flex justify-center items-center">
            {icon}
          </div>
          <div className="w-12 h-0 border border-white"></div>
        </div>
        <div className="pl-4">
          <div className="font-caveat text-2xl py-1">{label}</div>
          <div className="">{info}</div>
        </div>
      </a>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative font-jost z-10"
      id="contact"
    >
      <SectionTitle label="Contact Me" blueText="Let's" whiteText="Talk" />
      <div className="contacts-container">
        {contactItemArr.map((item) => (
          <ContactItem
            icon={item.icon}
            label={item.label}
            info={item.info}
            href={item.href}
            key={item.label}
          />
        ))}
      </div>
      <BottomText label="Contact Me" last={true} />
    </div>
  );
}
