import React, {FC} from 'react'

interface ProjectProps {
    title?:string,
    imageURL?:string,
    text?: string,
    tecnologies?:Array<string>
    className?: string
}

const Container: FC<ProjectProps> = ({title, imageURL, text, tecnologies, className}) => {
    return (
        <div className={className}>
            <div className='text-3xl'>
                {title}
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Container