import {OptionsSlider8bit} from "./Options/OptionsSlider";
import {OptionsRange8bit} from "./Options/OptionsRange";
import {OptionsSelect} from "./Options/OptionsSelect";

enum WaveMode {
    Horizontal = 0,
    Vertical = 1,
    RadialCircle = 2,
    RadialRect = 3,
    Plane = 4,
}

enum WaveDirection {
    Forward = 0,
    Reverse = 1,
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function hsvToHsl({h, s, v}: {h: number, s: number, v: number}): {h: number, s: number, l: number} {
    const sIn = s / 255;
    const vIn = v / 255;
    const l = (vIn * (1 - (sIn/2)));
    const s1 = (l === 0 || l === 1 ? 0 : (sIn * (1 - (l/vIn))));

    return {
        h: scale(h, 0, 255, 1,360),
        s: s1 * 100,
        l: l * 100,
    };
}

export default function WaveOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    const waveModeChoices = [
        { key: WaveMode.Horizontal, label: "Horizontal" },
        { key: WaveMode.Vertical, label: "Vertical" },
        { key: WaveMode.RadialCircle, label: "Radial Circle" },
        { key: WaveMode.RadialRect, label: "Radial Rectangular" },
        { key: WaveMode.Plane, label: "Plane" },
    ];
    const waveDirectionChoices = [
        { key: WaveDirection.Forward, label: "Forward" },
        { key: WaveDirection.Reverse, label: "Reverse" },
    ];

    const hsl = (title: string) => {
        const hsv = {
            h: options["colorHue" + title],
            s: options["colorSaturation" + title],
            v: options["colorValue" + title]
        };
        const {h, s, l} = hsvToHsl(hsv);
        console.log(hsv, h, s, l);
        return `${h}, ${s}%, ${l}%`;
    };

    return (
        <div>
            <OptionsSelect label={"wave Mode"} name={"waveMode"} choices={waveModeChoices} options={options} changeHandler={changeHandler} />
            <OptionsSelect label={"wave Direction"} name={"waveDirection"} choices={waveDirectionChoices} options={options} changeHandler={changeHandler} />

            <OptionsSlider8bit label={"wave Length"} name={"waveLength"} options={options} changeHandler={changeHandler} />
            <OptionsSlider8bit label={"speed"} name={"speed"} options={options} changeHandler={changeHandler} />

            <OptionsRange8bit label={"colorHue"} name={"colorHue"} options={options} changeHandler={changeHandler} />
            <OptionsRange8bit label={"colorSaturation"} name={"colorSaturation"} options={options} changeHandler={changeHandler} />
            <OptionsRange8bit label={"colorValue"} name={"colorValue"} options={options} changeHandler={changeHandler} />

            <div style={{background: `linear-gradient(90deg, hsl(${hsl("Low")}) 0%, hsl(${hsl("High")}) 100%)`}}>&nbsp;</div>
        </div>
    )
}
