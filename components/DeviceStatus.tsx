import {Device} from "../lib/Device";
import {useLedWallSystemInfo} from "../lib/LedWallApi";

interface Params {
    device: Device
}

export default function DeviceStatus({device}: Params) {
    const {systemInfo, isLoading, isError} = useLedWallSystemInfo(device);

    if (isLoading) {
        return (<div>loading...</div>)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    return (
        <div>
            <h2>device {device.name}</h2>
            <p>
                is it online?
            </p>
            <div>
                version: {systemInfo.projectVersion}
            </div>
        </div>
    )
}
