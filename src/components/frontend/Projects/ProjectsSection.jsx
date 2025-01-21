import web1 from "../../../../public/images/projects/web_1.png";
import web2 from "../../../../public/images/projects/web_2.png";
import web3 from "../../../../public/images/projects/web_3.png";
import web4 from "../../../../public/images/projects/web_4.png";
import web5 from "../../../../public/images/projects/web_5.png";
import web6 from "../../../../public/images/projects/web_6.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectSlide from "./ProjectSlide";
import SectionTitle from "@/components/shared/SectionTitle";

const ProjectsSection = () => {
  const projects = [
    {
      image_1: web1,
      image_2: web2,
      title: "AirCalling Landing Page Design ",
      category: "Web Design",
    },
    {
      image_1: web3,
      image_2: web4,
      title: "Business Landing Page Design  ",
      category: "Web Design",
    },
    {
      image_1: web5,
      image_2: web6,
      title: "Ecom Web Page Design  ",
      category: "Web Design",
    },
  ];
  return (
    <div className="max-content-width section-padding-x section-padding-y">
      <SectionTitle
        title="Projects"
        subTitle="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        className="text-center max-w-4xl mx-auto mb-12"
      />
      <Tabs defaultValue="webDesign" className="mx-auto">
        <TabsList className=" bg-transparent mx-auto gap-5  flex justify-center flex-wrap mb-20 xl:mb-28">
          <TabsTrigger
            className="bg-[#F8F8F8]  border md:py-2.5 md:px-5 data-[state=active]:bg-mp-primary data-[state=active]:text-white"
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="bg-[#F8F8F8] border md:py-2.5 md:px-5 data-[state=active]:bg-mp-primary data-[state=active]:text-white"
            value="ui/ux"
          >
            UI/UX
          </TabsTrigger>
          <TabsTrigger
            className="bg-[#F8F8F8] border md:py-2.5 md:px-5 data-[state=active]:bg-mp-primary data-[state=active]:text-white"
            value="webDesign"
          >
            Web Design
          </TabsTrigger>
          <TabsTrigger
            className="bg-[#F8F8F8] border md:py-2.5 md:px-5 data-[state=active]:bg-mp-primary data-[state=active]:text-white"
            value="app-design"
          >
            App Design
          </TabsTrigger>
          <TabsTrigger
            className="bg-[#F8F8F8] border md:py-2.5 md:px-5 data-[state=active]:bg-mp-primary data-[state=active]:text-white"
            value="graphic-design"
          >
            Graphic Design
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <ProjectSlide data={projects} />
        </TabsContent>
        <TabsContent value="ui/ux">
          <ProjectSlide data={projects} />
        </TabsContent>
        <TabsContent value="webDesign">
          <ProjectSlide data={projects} />
        </TabsContent>
        <TabsContent value="app-design">
          <ProjectSlide data={projects} />
        </TabsContent>
        <TabsContent value="graphic-design">
          <ProjectSlide data={projects} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsSection;
