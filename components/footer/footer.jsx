import { FbIcon, InstaIcon, Logo, XIcon } from "@/public";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto md:flex flex-wrap lg:flex-nowrap justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
        <div>
          <h3 className="md:text-center md:mb-5 my-4 text-xl font-semibold">
            Address
          </h3>
          <p>143 New Street, xxxxxxx DC</p>
          <p>xxxxxx States, xxxxxx</p>
        </div>
        <div>
          <h3 className="md:text-center md:mb-5 my-4 text-xl font-semibold">
            Email
          </h3>
          <p>needhelp@xxxxx.com</p>
          <p>inquiry@xxxxx.comx</p>
        </div>
        <div>
          <h3 className="md:text-center md:mb-5 my-4 text-xl font-semibold">
            Phone
          </h3>
          <p>Local: 222 999 888</p>
          <p>Mobile: 000 8888 999</p>
        </div>
        <div className="lg:w-auto md:w-full">
          <h3 className="md:text-center md:mb-5 my-4 text-xl font-semibold">
            Follow
          </h3>
          <div className="flex items-center gap-5 md:justify-center">
            <a href="#">
              <Image src={FbIcon} alt="icon" />
            </a>
            <a href="#">
              <Image src={InstaIcon} alt="icon" />
            </a>
            <a href="#">
              <Image src={XIcon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
