import {useLedWallSystemInfo} from "../../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import {useDeviceContext} from "../DeviceContext";

export default function DeviceSystemInfo() {
    const deviceContext = useDeviceContext();
    const {systemInfo, isLoading, isError} = useLedWallSystemInfo(deviceContext.device);

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    return (
        <div>
            <h2>System Info</h2>
            <div className={"pl-4 inline-block"}>
                <dl className={"grid grid-cols-2 gap-x-7"}>
                    <dt className={"w-56"}>Name</dt>
                    <dd>{deviceContext.device.name}</dd>

                    <dt>Firmware Version</dt>
                    <dd>{systemInfo.projectVersion}</dd>

                    <dt>Firmware Compile date/time</dt>
                    <dd>{systemInfo.compileDate} / {systemInfo.compileTime}</dd>
                </dl>
            </div>
        </div>
    )
}
