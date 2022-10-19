import {useLedWallMode} from "../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import ModeOptions from "./Mode/ModeOptions";
import {useDeviceContext} from "./DeviceContext";

export default function LedWallMode() {
    const deviceContext = useDeviceContext();
    const {mode, isLoading, isError} = useLedWallMode(deviceContext.device);

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    return (
        <div>
            <h2>Mode: {mode.name}</h2>
            <ModeOptions mode={mode} />
        </div>
    )
}
