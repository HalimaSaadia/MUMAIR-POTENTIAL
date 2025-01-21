import Image from 'next/image';
import React from 'react';

const ProjectCard = ({data}) => {
    return (
        <div className=''>
            <div className='relative bg-[#FFEBDB] px-5 z-20 h-[489px] rounded-xl'>
                <Image height={405} width={274} alt={data?.title} src={data?.image_1} className='absolute -bottom-1 left-5 md:left-2 lg:left-0 xl:left-5' />
                <Image height={405} width={274} alt={data?.title} src={data?.image_2} className='absolute right-5  md:right-2 lg:right-0 xl:right-5 top-0 -z-10 h-[489px]' />
            </div>
            <div className='pt-10'>
                <p className='text-mp-primary md:text-lg'>{data?.category}</p>
                <h3 className='text-xl md:text-2xl font-bold mt-2.5'>{data?.title}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;