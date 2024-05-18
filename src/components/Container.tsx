import React, {FC} from 'react'
import Project from './Project'
import img from '../../public/techiflo.png'
import Image from 'next/image'
import techifloIMG from '../../public/techiflo.png'
import backtestingIMG from '../../public/backtesting.png'
import globalLoginIMG from '../../public/globalLogic.png'
import { FaReact } from "react-icons/fa";
import { FaNode } from 'react-icons/fa6'
import { DiMongodb } from 'react-icons/di'
import { FaPython } from 'react-icons/fa6'
import { SiPandas } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'


interface ContainerProps {
    className?:string
}

const Container: FC<ContainerProps> = ({className}) => {

    
    return (
        <div className={'my-10 w-full ' + className}>
        <p className=' text-5xl text-center'>Projects</p>
        <div className='flex flex-col mt-10 items-center gap-20'>
            
            <Project 
                className='p-4 w-1/2 flex flex-col items-center  rounded-3xl bg-emerald-100 bg-opacity-15  hover:animate-pulseScale' 
                title='Te chiflo'
                text='Te Chiflo is a service that simplifies the process of obtaining train tickets in Argentina. Faced with high demand and limited availability, Te Chiflo automatically searches for tickets on behalf of third parties in exchange for a commission. The entire process is seamless and automated.' 
                image=
                    {
                    <a href='https://techiflo.com/' target="_blank" rel="noopener noreferrer" className='flex justify-center'>
                    <Image 
                        alt='Te chiflo' 
                        src={techifloIMG} 
                        width="1000"
                        height="1000"
                        className='rounded-3xl  cursor-pointer'/>
                    </a>
                    }
                tecnologies={[{name:'React',icon: <FaReact className='size-7'/>},{name:'NodeJS',icon: <FaNode className='size-7'/>},{name:'MongoDB',icon: <DiMongodb className='size-7'/>},{name:'Python',icon: <FaPython className='size-7'/>}, {name:'TensorFlow',icon: <SiTensorflow className='size-7'/>}]}
            />
            <Project 
                className='p-4 w-1/2 flex flex-col items-center rounded-3xl bg-emerald-100 bg-opacity-15 hover:animate-pulseScale' 
                title='Backtesting Trading' 
                text='BacktestPro offers a comprehensive backtesting service for trading strategies using the backtesting.py library. Clients can visualize their chosen indicators and simulate buy and sell actions over a selected time period and asset. At the end of the process, a detailed report with various statistics is provided.'
                image=
                    {<Image 
                        alt='Backtesting' 
                        src={backtestingIMG} 
                        width="1000" 
                        height="1000" 
                        className='rounded-3xl'/>
                    }
                tecnologies={[{name:'Python',icon: <FaPython className='size-7'/>},{name:'Pandas',icon: <SiPandas className='size-7'/>}]}
            />
            <Project 
                className='p-4 w-1/2 flex flex-col items-center rounded-3xl bg-emerald-100 bg-opacity-15 hover:animate-pulseScale' 
                title='Software Company' 
                text='I worked for two years as a full stack developer at Hexacta (a GlobalLogic Company), where I contributed to two projects. I collaborated with a team using agile methodologies to deliver high-quality solutions.'
                image=
                    {
                    <a href='https://www.globallogic.com/latam/' target="_blank" rel="noopener noreferrer" className='flex justify-center'>
                    <Image 
                        alt='GlobalLogic' 
                        src={globalLoginIMG} 
                        width="1000" 
                        height="1000" 
                        className='rounded-3xl'/>
                    </a>
                    }
                tecnologies={[{name:'React',icon: <FaReact className='size-7'/>},{name:'NodeJS',icon: <FaNode className='size-7'/>},{name:'MongoDB',icon: <DiMongodb className='size-7'/>}]}
            />
        </div>
        </div>
    )
}

export default Container