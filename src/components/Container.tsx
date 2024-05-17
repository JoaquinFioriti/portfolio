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
        <div className='flex flex-col mt-5 items-center gap-10'>
            <Project className='p-4 w-1/2 flex flex-col items-center border rounded-lg' title='Te chiflo' image={<Image alt='Te chiflo' src={techifloIMG} width="1000" height="1000"/>}/>
            <Project className='p-4 w-1/2 flex flex-col items-center border rounded-lg' title='Backtesting Trading' image={<Image alt='Te chiflo' src={backtestingIMG} width="1000" height="1000"/>}/>
            <Project className='p-4 w-1/2 flex flex-col items-center border rounded-lg' title='Software Company' image={<Image alt='Te chiflo' src={globalLoginIMG} width="1000" height="1000"/>}/>
        </div>
        </div>
    )
}

export default Container