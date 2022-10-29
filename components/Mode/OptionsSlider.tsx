import Slider from "rc-slider";

export function OptionsSlider({label, min, max, name, options, changeHandler}: {label: string, min: number, max: number, name: string, options: object, changeHandler: Function}) {
    return (
        <div>
            <span>{label}</span><span>{options[name]}</span>

            <Slider min={min} max={max} step={1} defaultValue={options[name]} onAfterChange={(value: number) => {
                let ops = options;
                ops[name] = value;
                changeHandler(ops);
            }} />
        </div>
    )
}

export function OptionsSlider8bit({label, name, options, changeHandler}: {label: string, name: string, options: object, changeHandler: Function}) {
    return (
        <OptionsSlider label={label} min={1} max={255} name={name} options={options} changeHandler={changeHandler} />
    )
}
