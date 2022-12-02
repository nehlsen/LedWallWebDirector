import {OptionsSlider, OptionsSlider8bit} from "./Options/OptionsSlider";

export default function BubblesOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    return (
        <div>
            <OptionsSlider label={"Number of Bubbles"} min={1} max={10} name={"numberOfBubbles"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"Maximum bubble size"} name={"maximumBubbleSize"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"speed"} name={"speed"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"Max frame delay"} name={"maximumFrameDelay"} options={options} changeHandler={changeHandler} />
        </div>
    )
}
