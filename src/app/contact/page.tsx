import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
      <div>
        <p className="text-lg text-center font-medium mb-2">
          Looking for a developer for your next project?
        </p>
        <p className="text-xl text-center font-bold mb-10">Lets talk!!</p>
        <div className="grid grid-cols-2 gap-3">
          <Box label="Email" title="hajidraihan@gmail.com" icon={MdOutlineEmail} href="#" />
          <Box
            label="Github"
            title="HajidRaihan"
            icon={FaGithub}
            href="https://github.com/HajidRaihan"
          />
          <Box
            label="LinkedIn"
            title="Hajid Raihan"
            icon={FaLinkedin}
            href="https://www.linkedin.com/in/hajidraihan/"
          />
          <Box
            label="Instagram"
            title="@raihanhjid"
            icon={FaInstagram}
            href="https://www.instagram.com/raihanhjid/"
          />
        </div>

        <p className="text-xs absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-5 text-center">
          Hajid Raihan © 2024
        </p>
      </div>
    </div>
  );
};

interface BoxProps {
  icon: IconType;
  label: string;
  title: string;
  href: string;
}

const Box: React.FC<BoxProps> = ({ icon: Icon, label, title, href }) => {
  return (
    <Link
      href={href}
      target={href !== "#" ? "_blank" : ""}
      data-aos="fade-right"
      className="w-72 h-20 border-2 hover:bg-black hover:text-white transition cursor-pointer border-black p-3 rounded-md flex items-center justify-start"
    >
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex gap-2 items-center">
          <Icon size={32} />
          <p>{label}</p>
        </div>
        <p className="text-xs">{title}</p>
      </div>
    </Link>
  );
};

export default Contact;
