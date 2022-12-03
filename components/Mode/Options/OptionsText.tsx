export function OptionsText({label, name, options, changeHandler}: {label: string, name: string, options: object, changeHandler: Function}) {
    return (
        <div className={"m-2"}>
            <span>{label}</span> {/*<span>{options[name]}</span>*/}
            <div>
                <input type={"text"} defaultValue={options[name]} className={"mt-2 p-1 border-2 focus:border-emerald-400"} onBlur={(event) => {
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
