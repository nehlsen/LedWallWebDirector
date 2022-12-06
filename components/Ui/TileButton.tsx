import {MouseEventHandler} from "react";

export default function TileButton({label, onClick, isSelected}: {label: string, onClick: MouseEventHandler<HTMLInputElement>, isSelected?: boolean}) {
    const cssClasses =
        `w-24 h-24 ` +
        `bg-blue-500 text-white font-semibold rounded-lg shadow-md ` +
        `hover:bg-blue-700 ` +
        `${true === isSelected ? 'outline outline-2 outline-pink-500 outline-offset-1 focus:outline focus:outline-2 focus:outline-pink-500 focus:outline-offset-1' : ''}`;

    return (
        <button onClick={onClick} className={cssClasses}>
            {label}
        </button>
    );
}
