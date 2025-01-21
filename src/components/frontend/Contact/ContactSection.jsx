import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="section-padding-x max-content-width section-padding-y">
       <SectionTitle
        title="Lets Design Together"
        subTitle="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        className="text-center max-w-4xl mx-auto mb-12"
      />
      <div className="max-w-max mx-auto flex flex-wrap justify-center gap-6 mt-12">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-72 h-10 bg-[#F8F8F8] focus:outline-none md:h-12 md:w-[420px] lg:h-14 lg:w-[500px]  xl:h-[75px]  xl:w-[627px] text-sm md:text-base xl:text-2xl px-5 border text-[#797979] rounded-xl"
        />
        <Button className="md:h-12 lg:h-14 lg:w-52 xl:h-[75px] xl:w-[222px] lg:text-lg xl:text-2xl rounded-xl">
        Contact Me
      </Button>
      </div>
    </div>
  );
};

export default ContactSection;
