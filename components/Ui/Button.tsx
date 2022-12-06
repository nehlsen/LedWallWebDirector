import {MouseEventHandler} from "react";

export default function Button({label, onClick}: {label: string, onClick: MouseEventHandler<HTMLInputElement>}) {
    const cssClasses = "py-2 px-4 font-medium text-center rounded-md ring-1 ring-slate-700/10 shadow-sm hover:bg-slate-50";
    return (
        <button onClick={onClick} className={cssClasses}>
            {label}
        </button>
    );
}
