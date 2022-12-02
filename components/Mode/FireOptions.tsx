import {OptionsSlider8bit} from "./OptionsSlider";

export default function FireOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    return (
        <div>
            <OptionsSlider8bit label={"Cooling"} name={"cooling"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"Sparking"} name={"sparking"} options={options} changeHandler={changeHandler} />
        </div>
    )
}
