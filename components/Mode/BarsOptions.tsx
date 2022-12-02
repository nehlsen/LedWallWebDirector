import {OptionsSlider8bit} from "./Options/OptionsSlider";

export default function BarsOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    return (
        <div>
            <OptionsSlider8bit label={"Bars rate"} name={"barsRate"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"Fade rate"} name={"fadeRate"} options={options} changeHandler={changeHandler} />
        </div>
    )
}
