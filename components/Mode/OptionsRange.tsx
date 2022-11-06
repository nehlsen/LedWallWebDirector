import Slider from "rc-slider";

export function OptionsRange({label, min, max, name, options, changeHandler}: {label: string, min: number, max: number, name: string, options: object, changeHandler: Function}) {
    const nameLow = name + "Low";
    const nameHigh = name + "High";

    const defaultValues = [
        options[nameLow],
        options[nameHigh],
    ];

    const afterChange = ([valueLow, valueHigh]) => {
        let ops = options;
        ops[nameLow] = valueLow;
        ops[nameHigh] = valueHigh;
        changeHandler(ops);
    };

    return (
        <div className={"m-2"}>
            <span>{label}</span> <span>{options[name]}</span>

            <Slider range min={min} max={max} step={1} defaultValue={defaultValues} className={"mt-2"} onAfterChange={afterChange} />
        </div>
    )
}

export function OptionsRange8bit({label, name, options, changeHandler}: {label: string, name: string, options: object, changeHandler: Function}) {
    return (
        <OptionsRange label={label} min={1} max={255} name={name} options={options} changeHandler={changeHandler} />
    )
}
