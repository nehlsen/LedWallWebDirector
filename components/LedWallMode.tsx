import {Device} from "../lib/Device";
import {useLedWallMode} from "../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import ModeOptions from "./Mode/ModeOptions";

interface Params {
    device: Device
}

export default function LedWallMode({device}: Params) {
    const {mode, isLoading, isError} = useLedWallMode(device);

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
