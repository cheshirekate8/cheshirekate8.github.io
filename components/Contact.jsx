import { FaMap, FaEnvelope, FaPhone } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import BottomText from "./BottomText";
import Link from "next/link";

export default function Contact() {
  const contactItemArr = [
    {
      icon: <FaMap className="text-white" />,
      label: "Location",
      info: "Las Vegas, NV",
      href: "",
    },
    {
      icon: <FaEnvelope className="text-white" />,
      label: "Email",
      info: "katie.f.young@me.com",
      href: "mailto:katie.f.young@me.com",
    },
    {
      icon: <FaPhone className="text-white" />,
      label: "Phone",
      info: "937-239-2748",
      href: "tel:+19372392748",
    },
  ];

  const ContactItem = ({ icon, label, info, href }) => {
    return (
      <Link
        className={`flex m-8 text-left group ${
          href ? "pointer-events-auto" : "pointer-events-none"
        }`}
        href={href}
      >
        <div className="flex items-center">
          <div className="dot w-14 h-14 border-2 border-white rounded-full drop-shadow-hard bg-cyan-600 group-hover:bg-sky-900 ease-in-out duration-200 flex justify-center items-center">
            {icon}
          </div>
          <div className="w-12 h-0 border border-white"></div>
        </div>
        <div className="pl-4">
          <div className="font-caveat text-2xl py-1">{label}</div>
          <div className="">{info}</div>
        </div>
      </Link>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative font-jost overflow-hidden"
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
