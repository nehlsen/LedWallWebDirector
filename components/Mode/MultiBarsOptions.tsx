import {OptionsSlider, OptionsSlider8bit} from "./Options/OptionsSlider";

export default function MultiBarsOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    return (
        <div>
            <OptionsSlider8bit label={"Fade rate"} name={"fadeRate"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"Bar travel speed"} name={"barTravelSpeed"} options={options} changeHandler={changeHandler} />
            <OptionsSlider label={"Number of Bars"} min={1} max={10} name={"numberOfBars"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"Max frame delay"} name={"maximumFrameDelay"} options={options} changeHandler={changeHandler} />
        </div>
    )
}
