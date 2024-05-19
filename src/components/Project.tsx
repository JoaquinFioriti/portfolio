"use client";

import React, {FC, useState} from 'react'
import { GoChevronDown } from "react-icons/go";
import StackBox from './StackBox';
import { FaReact } from "react-icons/fa";

interface Tecnology {
    name?:string,
    icon?:JSX.Element
}


interface ProjectProps {
    title?:string,
    image?:JSX.Element,
    text?: string,
    tecnologies?:Tecnology[]
    className?: string
}




const Container: FC<ProjectProps> = ({title, image, text, tecnologies, className}) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={className}>
            <div className='text-3xl mb-4'>
                {title}
            </div>
            <div className='flex flex-col items-center'>
                {image}
                <div className='flex flex-col justify-center items-center'>
                <GoChevronDown onClick={handleButtonClick} className='lg:hidden mt-5 cursor-pointer' size={30}/>
                <p className={`lg:flex ${isVisible? 'flex' : 'hidden'} text-center text-md py-5 leading-7 text-gray-800`}>{text}</p>
                </div>
                <div className={`lg:flex flex-col gap-4 items-center w-full ${isVisible? 'flex' : 'hidden'}`}>
                <p className='text-3xl'>Stack</p>
                <div className='flex lg:flex-row gap-4 flex-wrap flex-col justify-center w-full items-center'>
                {
                    tecnologies?.map((tech,index)=>(
                        <StackBox className='gap-1 rounded-lg w-3/4' key={index} label={tech.name} icon={tech.icon}/>
                    ))
                }
                </div>
                </div>
            </div>
        </div>
    )
}
export default Container