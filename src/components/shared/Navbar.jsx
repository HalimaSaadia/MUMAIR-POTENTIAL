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
        <div>
          <Image
            src={logo}
            height={67}
            width={279}
            className="h-[45px] w-[179px] xl:h-[67px] xl:w-[279px] "
            alt="logo"
          />
        </div>
        <div>
          <ul className="hidden lg:flex gap-[26px] items-center">
            {navItems.map((item, idx) => (
              <li>
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
                      <li>
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
