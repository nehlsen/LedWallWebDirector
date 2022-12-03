export function OptionsSelect({label, name, choices, options, changeHandler}: {label: string, name: string, choices: {key: string|number, label: string}[], options: object, changeHandler: Function}) {
    return (
        <div className={"m-2"}>
            <span>{label}</span>
            <div>
                <select className={"mt-2 p-1 border-2 focus:border-emerald-400"} defaultValue={options[name]} onChange={(event) => {
                    if (options[name] === event.target.value) {
                        return;
                    }

                    let ops = options;
                    ops[name] = typeof options[name] === 'number' ? parseInt(event.target.value) : event.target.value;
                    changeHandler(ops);
                }}>
                    {choices.map(({key, label}: {key: string|number, label: string}) => {
                        return (
                            <option key={key} value={key}>{label}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
}
