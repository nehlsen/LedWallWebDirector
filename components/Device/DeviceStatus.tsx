import {useLedWallSystemInfo} from "../../lib/LedWallApi";
import {Avatar, Loading} from "@nextui-org/react";
import {useDeviceContext} from "../DeviceContext";

export default function DeviceStatus() {
    const deviceContext = useDeviceContext();
    const {isLoading, isError} = useLedWallSystemInfo(deviceContext.device);

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
