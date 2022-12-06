import {OptionsText} from "./Options/OptionsText";
import {OptionsSelect} from "./Options/OptionsSelect";

export default function TimeOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    {/* variant: 0:time, 1:CountDown, 2:CountDownTo, 3: CountUp, 4:CountSince */}
    {/* parameter: TODO */}

    const variantChoices = [
        { key: 0, label: "Time" },
        { key: 1, label: "Count Down" },
        { key: 2, label: "Count Down To" },
        { key: 3, label: "Count Up" },
        { key: 4, label: "Count Since" },
    ];

    let ops = options;
    let updateOps = (newOps) => {
        ops['variant'] = parseInt(newOps['variant']);

        if (ops['variant'] === 1 || ops['variant'] === 3) {
            ops['parameter'] = parseInt(newOps['parameter']);
        } else {
            console.log('not implemented: text field should contain a time...');
        }
    };

    return (
        <div>
            <OptionsText label={"Parameter"} name={"parameter"} options={options} changeHandler={updateOps} />

            <OptionsSelect label={"Variant"} name={"variant"} choices={variantChoices} options={options} changeHandler={updateOps} />


            <input type="button" value={"Update!"} className={"mt-2 p-2 border"} onClick={() => {
                changeHandler(ops);
            }} />
        </div>
    )
}
