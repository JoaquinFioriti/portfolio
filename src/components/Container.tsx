import React, {FC} from 'react'
import Project from './Project'
import img from '../../public/techiflo.png'
import Image from 'next/image'


interface ContainerProps {
    className?:string
}

const Container: FC<ContainerProps> = ({className}) => {
    return (
        <div className={'my-10 w-full ' + className}>
        <p className=' text-5xl text-center'>Projects</p>
        <div className='flex flex-col mt-5 items-center gap-10'>
            <Project className='p-4 w-1/2 flex justify-center border rounded-lg' title='Te chiflo' image={<Image alt='Te chiflo' src='https://ethic.es/wp-content/uploads/2023/03/imagen.jpg' width="100" height="64"/>}/>
            <Project className='p-4 w-1/2 flex justify-center border rounded-lg' title='Backtesting Trading' />
            <Project className='p-4 w-1/2 flex justify-center border rounded-lg' title='Software Company' />
        </div>
        </div>
    )
}

export default Container