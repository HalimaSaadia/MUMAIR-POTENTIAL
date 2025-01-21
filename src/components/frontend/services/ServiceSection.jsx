import uiUx from "../../../../public/images/services/ui-ux.png";
import web from "../../../../public/images/services/web-design.png";
import app from "../../../../public/images/services/app-design.png";
import graphic from "../../../../public/images/services/graphic-design.png";
import ServiceCard from "./ServiceCard";
import SectionTitle from "@/components/shared/SectionTitle";
const ServiceSection = () => {
  const services = [
    {
      id: 1,
      name: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: uiUx,
    },
    {
      id: 2,
      name: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: web,
    },
    {
      id: 3,
      name: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: app,
    },
    {
      id: 4,
      name: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
      image: graphic,
    },
  ];
  return (
    <div className="section-padding-x max-content-width section-padding-y">
        <SectionTitle title="Services" className="text-center  max-w-4xl mx-auto" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium " />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-8">
        {services?.map((service) => (
          <ServiceCard key={service?.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
