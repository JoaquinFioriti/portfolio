"use client";

import React, {FC, useState} from 'react'
import { GoChevronDown } from "react-icons/go";


interface ProjectProps {
    title?:string,
    image?:JSX.Element,
    text?: string,
    tecnologies?:Array<string>
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
                <GoChevronDown onClick={handleButtonClick} className='lg:hidden mt-5 ' size={30}/>
                <p className={`lg:flex ${isVisible? 'flex' : 'hidden'} text-center text-md py-5 leading-7 text-gray-800`}>{text}</p>
                </div>
            </div>
        </div>
    )
}
export default Container