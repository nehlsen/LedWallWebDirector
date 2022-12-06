import {OptionsText} from "./Options/OptionsText";
import {OptionsSelect} from "./Options/OptionsSelect";
import Button from "../Ui/Button";
import {setLedWallModeOptions, url as LedWallApiUrl} from "../../lib/LedWallApi";
import {useDeviceContext} from "../DeviceContext";
import {useSWRConfig} from "swr";
import TileButton from "../Ui/TileButton";

enum TimeVariant {
    Time = 0,
    CountDown = 1,
    CountDownTo = 2,
    CountUp = 3,
    CountSince = 4,
}

export default function TimeOptions({options, changeHandler}: {options: object, changeHandler: Function}) {
    {/* variant: 0:time, 1:CountDown, 2:CountDownTo, 3: CountUp, 4:CountSince */}
    {/* parameter: either a number of seconds to count from/to or a datetime string */}

    const deviceContext = useDeviceContext();
    const { mutate } = useSWRConfig();

    const variantChoices = [
        { key: TimeVariant.Time, label: "Time" },
        { key: TimeVariant.CountDown, label: "Count Down" },
        { key: TimeVariant.CountDownTo, label: "Count Down To" },
        { key: TimeVariant.CountUp, label: "Count Up" },
        { key: TimeVariant.CountSince, label: "Count Since" },
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

    let shortcuts = {
        showTheTime: () => {
            setLedWallModeOptions(deviceContext.device, {variant: TimeVariant.Time})
                .then((modeWithOptions) => {
                    mutate(LedWallApiUrl(deviceContext.device).mode, modeWithOptions, {revalidate: false});
                });
        },
        setCountDown: (seconds: number) => {
            setLedWallModeOptions(deviceContext.device, {variant: TimeVariant.CountDown, parameter: seconds})
                .then((modeWithOptions) => {
                    mutate(LedWallApiUrl(deviceContext.device).mode, modeWithOptions, {revalidate: false});
                });
        },
    };

    return (
        <div>
            <div className={"flex flex-wrap gap-3"}>
                <TileButton label={"Show the Time"} onClick={() => {shortcuts.showTheTime()}} />
                <TileButton label={"Count Down 1m"} onClick={() => {shortcuts.setCountDown(60)}} />
                <TileButton label={"Count Down 3m"} onClick={() => {shortcuts.setCountDown(60 * 3)}} />
                <TileButton label={"Count Down 5m"} onClick={() => {shortcuts.setCountDown(60 * 5)}} />
                <TileButton label={"Count Down 1h"} onClick={() => {shortcuts.setCountDown(60 * 60)}} />
            </div>

            <div>
                <OptionsText label={"Parameter"} name={"parameter"} options={options} changeHandler={updateOps} />
                <OptionsSelect label={"Variant"} name={"variant"} choices={variantChoices} options={options} changeHandler={updateOps} />
                <Button label={"Update!"} onClick={() => {
                    changeHandler(ops);
                }} />
            </div>
        </div>
    )
}
