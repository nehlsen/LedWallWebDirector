import {MouseEventHandler} from "react";

export default function Button({label, onClick}: {label: string, onClick: MouseEventHandler<HTMLInputElement>}) {
    return (
        <input type="button" value={label} onClick={onClick}
               className={"py-2 px-4 font-medium text-center rounded-md ring-1 ring-slate-700/10 shadow-sm hover:bg-slate-50"} />
    );
}
