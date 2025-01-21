import { cn } from '@/lib/utils';
import React from 'react';

const SectionTitle = ({title,subTitle, className}) => {
    return   <>
    <h1  className={cn("text-4xl md:text-5xl xl:text-6xl font-semibold", className) }>{title} </h1>
    <p  className={cn("lg:text-lg xl:text-2xl my-5", className) }>{subTitle} </p>
    </>
};

export default SectionTitle;