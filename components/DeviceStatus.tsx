import {Device} from "../lib/Device";
import {useLedWallSystemInfo} from "../lib/LedWallApi";
import {Avatar, Loading} from "@nextui-org/react";

interface Params {
    device: Device
}

export default function DeviceStatus({device}: Params) {
    const {isLoading, isError} = useLedWallSystemInfo(device);

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (
            <Avatar color="error" />
        )
    }

    return (
        <Avatar color="success" />
    );
}
