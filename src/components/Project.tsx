import React, {FC} from 'react'

interface ProjectProps {
    title?:string,
    image?:JSX.Element,
    text?: string,
    tecnologies?:Array<string>
    className?: string
}

const Container: FC<ProjectProps> = ({title, image, text, tecnologies, className}) => {
    return (
        <div className={className}>
            <div className='text-3xl'>
                {title}
            </div>
            <div className=''>
                {image}

            </div>
        </div>
    )
}

export default Container