import {OptionsSlider} from "./Options/OptionsSlider";
import {OptionsText} from "./Options/OptionsText";
import {OptionsSelect} from "./Options/OptionsSelect";
import {OptionsColor} from "./Options/OptionsColor";

export default function TextOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    {/* backgroundColor: hex */}
    {/* color: hex */}
    {/* scrollDirection 0:left, 1:right */}
    {/* scrollMode 0:none(not scroll), 1:infinite, 2:bounce*/}
    {/* scrollSpeed 1-60 */}
    {/* text */}

    const scrollDirectionChoices = [
        { key: 0, label: "Left" },
        { key: 1, label: "Right" },
    ];
    const scrollModeChoices = [
        { key: 0, label: "No scrolling" },
        { key: 1, label: "Scroll infinite in one direction" },
        { key: 2, label: "Bounce" },
    ];

    return (
        <div>
            <OptionsText label={"Text"} name={"text"} options={options} changeHandler={changeHandler} />
            <OptionsColor label={"Text Color"} name={"color"} options={options} changeHandler={changeHandler} />
            <OptionsColor label={"Background Color"} name={"backgroundColor"} options={options} changeHandler={changeHandler} />
            <OptionsSlider label={"Scroll Speed"} min={1} max={60} name={"scrollSpeed"} options={options} changeHandler={changeHandler} />
            <OptionsSelect label={"Scroll Direction"} name={"scrollDirection"} choices={scrollDirectionChoices} options={options} changeHandler={changeHandler} />
            <OptionsSelect label={"Scroll Mode"} name={"scrollMode"} choices={scrollModeChoices} options={options} changeHandler={changeHandler} />
        </div>
    )
}
