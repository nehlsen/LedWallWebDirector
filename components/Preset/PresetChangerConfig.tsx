import {useDeviceContext} from "../DeviceContext";
import {
    setLedWallPresetChangerOptions,
    url as LedWallApiUrl,
    useLedWallPresetChangerOptions
} from "../../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import {useSWRConfig} from "swr";

export default function PresetChangerConfig() {
    const deviceContext = useDeviceContext();
    const {presetChangerOptions, isLoading, isError} = useLedWallPresetChangerOptions(deviceContext.device);
    const { mutate } = useSWRConfig();

    if (deviceContext.device.readonly) {
        return (
            <div className={"hidden"}>
                readonly mode
            </div>
        );
    }

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    const onOptionsChanged = () => {
        setLedWallPresetChangerOptions(deviceContext.device, presetChangerOptions)
            .then((updatedOptions) => {
                mutate(LedWallApiUrl(deviceContext.device).presetChangerOptions, updatedOptions, {revalidate: false});
            });
    };

    return (
        <div className={"p-4"}>
            <div className={"p-2 rounded-md ring-1 ring-slate-900/10"}>
                <div className={"mt-2"}>
                    <strong>Preset Changer</strong>
                </div>
                <div className={"mt-2"}>
                    <label><input type="radio" name={"random"} defaultChecked={presetChangerOptions.random} onChange={() => {presetChangerOptions.random = true; onOptionsChanged();}} />Random</label>
                    <label><input type="radio" name={"random"} defaultChecked={!presetChangerOptions.random} onChange={() => {presetChangerOptions.random = false; onOptionsChanged();}} />In Sequence</label>
                </div>
                <div className={"mt-2"}>
                    <label><input type="radio" name={"auto"} defaultChecked={presetChangerOptions.auto} onChange={() => {presetChangerOptions.auto = true; onOptionsChanged();}} />Auto</label>
                    <label><input type="radio" name={"auto"} defaultChecked={!presetChangerOptions.auto} onChange={() => {presetChangerOptions.auto = false; onOptionsChanged();}} />Manual</label>
                </div>
                <div className={"mt-2"}>
                    <input type="text" placeholder={"delay"} value={presetChangerOptions.delay} onChange={(event) => {
                        presetChangerOptions.delay = parseInt(event.target.value);
                        onOptionsChanged();
                    } }
                           className={"w-full p-1.5 rounded-md ring-1 ring-slate-900/10 shadow-sm"} />
                </div>
            </div>
        </div>
    );
}
