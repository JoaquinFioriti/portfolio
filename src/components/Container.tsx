import React, {FC} from 'react'
import Project from './Project'
import img from '../../public/techiflo.png'
import Image from 'next/image'
import techifloIMG from '../../public/techiflo.png'
import backtestingIMG from '../../public/backtesting.png'
import globalLoginIMG from '../../public/globalLogic.png'


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
                    }/>
            <Project 
                className='p-4 w-1/2 flex flex-col items-center border rounded-3xl bg-emerald-100 bg-opacity-15 hover:animate-pulseScale cursor-pointer' 
                title='Backtesting Trading' 
                text='BacktestPro offers a comprehensive backtesting service for trading strategies using the backtesting.py library. Clients can visualize their chosen indicators and simulate buy and sell actions over a selected time period and asset. At the end of the process, a detailed report with various statistics is provided.'
                image=
                    {<Image 
                        alt='Te chiflo' 
                        src={backtestingIMG} 
                        width="1000" 
                        height="1000" 
                        className='rounded-3xl'/>
                    }/>
            <Project 
                className='p-4 w-1/2 flex flex-col items-center border rounded-3xl bg-emerald-100 bg-opacity-15 hover:animate-pulseScale cursor-pointer' 
                title='Software Company' 
                text='I worked for two years as a full stack developer at Hexacta (a GlobalLogic Company), where I contributed to two projects. I collaborated with a team using agile methodologies to deliver high-quality solutions.'
                image=
                    {<Image 
                        alt='Te chiflo' 
                        src={globalLoginIMG} 
                        width="1000" 
                        height="1000" 
                        className='rounded-3xl'/>
                    }/>
        </div>
        </div>
    )
}

export default Container