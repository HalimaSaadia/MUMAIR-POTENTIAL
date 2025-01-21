import Image from "next/image";
import logo from "../../../public/images/logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import DownloadCV from "./DownloadCV";
import { ListCollapse } from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Me",
      route: "/",
    },
    {
      name: "Services",
      route: "/",
    },
    {
      name: "Projects",
      route: "/",
    },
    {
      name: "Testimonials",
      route: "/",
    },
    {
      name: "Contact",
      route: "/",
    },
  ];
  return (
    <div className="py-5">
      <div className="flex items-center justify-between max-content-width mx-auto section-padding-x">
        <div className="flex items-center gap-5">
          <Image
            src={logo}
            height={67}
            width={67}
            className="h-10 w-10 md:h-[45px] md:w-[45px] xl:h-[67px] xl:w-[67px] "
            alt="logo"
          />
          <h1 className="text-3xl xl:text-5xl text-[#545454] dark:text-white font-light"><span className="text-[#1E1E1E] dark:text-white font-semibold">M</span>umair </h1>
        </div>
        <div>
          <ul className="hidden lg:flex gap-[26px] items-center">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link key={idx} className="xl:text-[21px]" href={item?.route}>
                  {item.name}
                </Link>
              </li>
            ))}
            <DownloadCV />
          </ul>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger> <ListCollapse size={30}/></SheetTrigger>
             
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                  <ul className="flex flex-col lg:hidden gap-[26px] items-center ">
                    {navItems.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          key={idx}
                          className="xl:text-[21px] text-left"
                          href={item?.route}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <DownloadCV />
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
