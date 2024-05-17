import React, { FC } from "react";


interface StackBoxProps {
    label?: string;
    icon?: JSX.Element;
    className?: string;
}

const StackBox: FC<StackBoxProps> = ({ label, icon, className }) => {
    return (
        <div className={`flex flex-row  mt-5 p-4 bg-green-200 bg-opacity-20 rounded ${className}`}>
            {label ? label : "ghola"}
            {icon}
        </div>
    );
};

export default StackBox;