export function OptionsColor({label, name, options, changeHandler}: {label: string, name: string, options: object, changeHandler: Function}) {
    return (
        <div className={"m-2"}>
            <span>{label}</span>
            <div>
                <input type={"color"} defaultValue={options[name]} className={"mt-2 p-1 border-2 focus:border-emerald-400"} onChange={(event) => {
                    if (options[name] === event.target.value) {
                        return;
                    }

                    let ops = options;
                    ops[name] = event.target.value;
                    changeHandler(ops);
                }} />
            </div>
        </div>
    )
}
