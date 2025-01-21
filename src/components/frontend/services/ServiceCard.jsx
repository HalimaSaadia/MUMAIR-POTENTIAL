import Image from "next/image";

const ServiceCard = ({ data }) => {
  return (
    <div className="bg-[#F8F8F8] rounded-md p-5 flex flex-col pt-8">
     <div className="flex-grow flex items-end">
     <Image
        height={70}
        width={70}
        className="h-min w-min:"
        alt={data?.name}
        src={data?.image}
      />
     </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold my-4 dark:text-black">{data?.name}</h3>
        <h3 className="text-sm md:text-lg lg:text-base xl:text-lg dark:text-black">{data?.description}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
