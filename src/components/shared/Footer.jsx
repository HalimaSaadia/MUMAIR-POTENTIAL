import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className=" ">
        <footer className="flex flex-col gap-10 py-24 items-center max-content-width section-padding-x bg-[#F8F8F8] dark:bg-transparent">
          {" "}
          <div className="flex items-center gap-5">
            <Image
              src={logo}
              height={67}
              width={67}
              className="h-10 w-10 md:h-[45px] md:w-[45px] xl:h-[67px] xl:w-[67px] "
              alt="logo"
            />
            <h1 className="text-3xl xl:text-5xl text-[#545454] dark:text-white font-light">
              <span className="text-[#1E1E1E] dark:text-white font-semibold">
                M
              </span>
              umair{" "}
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 ">
            <Link href="/" className="xl:text-[21px]">
              Home
            </Link>
            <Link href="/" className="xl:text-[21px]">
              About Me
            </Link>

            <Link href="/" className="xl:text-[21px]">
              Services
            </Link>
            <Link href="/" className="xl:text-[21px]">
              Projects
            </Link>
            <Link href="/" className="xl:text-[21px]">
              Testimonials
            </Link>
            <Link href="/" className="xl:text-[21px]">
              Contact
            </Link>
          </nav>
          <nav className="flex items-center justify-center gap-5">
            <Link href="/"><FaFacebook className="text-xl lg:text-3xl" /></Link>
            <Link href="/"><FaTwitter className="text-xl lg:text-3xl" /></Link>
            <Link href="/"><FaInstagram className="text-xl lg:text-3xl" /></Link>
            <Link href="/"><FaLinkedin className="text-xl lg:text-3xl" /></Link>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4 "></div>
          </nav>
        </footer>
        <footer className="bg-[#545454] dark:bg-[#121212] max-content-width section-padding-x py-4 xl:py-6">
          <p className="text-center text-white xl:text-2xl">© 2023 <span className="text-mp-primary">Mumair</span> All Rights Reserved , Inc.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
