import React, {FC} from 'react'
import Project from './Project'

interface ContainerProps {
    className?:string
}

const Container: FC<ContainerProps> = ({className}) => {
    return (
        <div className={'my-10 w-full ' + className}>
        <p className=' text-5xl text-center'>Projects</p>
        <div className='flex flex-col mt-5 items-center gap-10'>
            <Project className='p-4 w-1/2 flex justify-center border' title='Te chiflo' />
            <Project className='p-4 w-1/2 flex justify-center border' title='Backtesting Trading' />
            <Project className='p-4 w-1/2 flex justify-center border' title='Software Company' />
        </div>
        </div>
    )
}

export default Container