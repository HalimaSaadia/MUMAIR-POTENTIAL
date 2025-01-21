import Image from "next/image";
import profile from "../../../../public/images/hero/hero_profile.png";
import rectangle from "../../../../public/images/hero/Rectangle.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="max-content-width mx-auto grid grid-cols-5 gap-10 md:gap-16 xl:gap-32 section-padding-x items-center section-padding-y">
      <div className="col-span-5 lg:col-span-3 ">
        <div className="max-w-[714px]">
          <p className="text-lg md:text-2xl">Hi I am </p>
          <h3 className="text-2xl md:text-[32px] text-mp-primary">Muhammad Umair </h3>
          <h1 className="text-4xl md:text-5xl xl:text-[100px] font-bold leading-title leading-none">
            UI & UX
          </h1>
          <h1 className="text-4xl md:text-5xl xl:text-[100px] font-bold lg:text-center xl:text-end leading-none ml-20 md:ml-28 lg:ml-0  lg:mr-16">
            Designer{" "}
          </h1>
          <p className="md:text-lg xl:text-2xl text-justify my-7">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <Button className="xl:h-[52px] xl:w-[188px] xl:text-2xl ">
            Here Me
          </Button>
        </div>
      </div>
      <div className="order-first lg:order-last col-span-5 lg:col-span-2">
        <div className="relative">
          <Image
            src={rectangle}
            height={83}
            width={374}
            alt="Hero section Profile"
            className="absolute left-[14%] md:left-[23%] lg:left-[14%] xl:left-[8%] top-[12%]  xl:top-[10%] h-10 w-52 md:h-[83px] md:w-[384px] lg:h-[50px] lg:w-60 xl:h-[83px] xl:w-[384px]"
          />
          <Image
            src={profile}
            height={617}
            width={538}
            alt="Hero section Profile"
            className="md:h-[617px] md:w-[538px] lg:h-96 lg:w-80 xl:h-[550px] xl:w-[538px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
