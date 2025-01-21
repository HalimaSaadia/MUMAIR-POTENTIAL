import Image from "next/image";
import profile from "../../../../public/images/about-me/about-me.png";
import rectangle from "../../../../public/images/hero/Rectangle.png";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/shared/SectionTitle";

const AboutMe = () => {
  return (
    <div className="max-content-width mx-auto grid  lg:grid-cols-2 gap-10 md:gap-16 lg:gap-5  section-padding-x  section-padding-y items-center">
      <div className=" ">
        <div className="relative ">
          <Image
            src={rectangle}
            height={83}
            width={374}
            alt="Hero section Profile"
            className="absolute left-[14%] md:left-[23%] lg:left-[10%] xl:left-[10%] top-[12%]  xl:top-[10%] h-10 w-52 md:h-[83px] md:w-[384px] lg:h-[50px] lg:w-60 xl:h-[83px] xl:w-[384px]"
          />
          <Image
            src={profile}
            height={617}
            width={538}
            alt="Hero section Profile"
            className="md:h-[617px] md:w-[538px] lg:h-96 lg:w-[350px] xl:h-[550px] xl:w-[538px] mx-auto lg:mx-0"
          />
        </div>
      </div>
     <div>
        <div>
          <SectionTitle title="About Me" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra" />
           
        </div>
     <div className="grid md:grid-cols-2 xl:grid-cols-1 items-center gap-5">
        <div className="mt-5">
          <h3 className="text-lg md:text-2xl font-semibold mb-3">UX </h3>
          <Slider
            defaultValue={[95]}
            max={100}
            step={1}
            className={cn("")}
          />
        </div>
        <div className="mt-5">
          <h3 className="text-lg md:text-2xl font-semibold mb-3">Website Design </h3>
          <Slider
            defaultValue={[90]}
            max={100}
            step={1}
            className={cn("")}
          />
        </div>
        <div className="mt-5">
          <h3 className="text-lg md:text-2xl font-semibold mb-3">App Design  </h3>
          <Slider
            defaultValue={[96]}
            max={100}
            step={1}
            className={cn("")}
          />
        </div>
        <div className="mt-5">
          <h3 className="text-lg md:text-2xl font-semibold mb-3">Graphic Design  </h3>
          <Slider
            defaultValue={[92]}
            max={100}
            step={1}
            className={cn("")}
          />
        </div>
      </div>
     </div>
    </div>
  );
};

export default AboutMe;
