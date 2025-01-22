import Image from "next/image";
import { CgQuote } from "react-icons/cg";

const TestimonialCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 !rounded-xl !rounded-t-xl bg-[#F8F8F8] py-10 p-5 lg:p-10 ">
      <div className="flex-auto">
        <Image height={235} width={235} alt={data?.name} className="rounded-full h-12 w-12 md:h-auto md:w-[235px]" src={data?.profile} />
      </div>
      <div>
       <CgQuote className="inline-block scale-150 text-mp-primary mb-3" />
        <span className="text-[#424242] text-sm md:text-base inline ">
          {" "}
          {data.review}
        </span>
        <CgQuote className="inline-block scale-150 text-mp-primary" />
        
        <h3 className="text-lg md:text-2xl font-semibold mt-2">Name</h3>
        <p>{data?.name}</p>
       
      </div>
    </div>
  );
};

export default TestimonialCard;
