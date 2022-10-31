import {useDeviceContext} from "../DeviceContext";
import {useLedWallConfig} from "../../lib/LedWallApi";
import {Loading} from "@nextui-org/react";

export default function DeviceConfig() {
    const deviceContext = useDeviceContext();
    const {config, isLoading, isError} = useLedWallConfig(deviceContext.device);

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    return (
        <div>
            <h2>Config</h2>
            <div className={"pl-4 inline-block"}>
                <dl className={"grid grid-cols-2 gap-x-7"}>
                    <dt className={"w-56"}>Matrix Options</dt>
                    <dd>{config.MatrixOptions}</dd>

                    <dt>Matrix Width</dt>
                    <dd>{config.MatrixWidth}</dd>

                    <dt>Matrix Height</dt>
                    <dd>{config.MatrixHeight}</dd>

                    <dt>Brightness</dt>
                    <dd>{config.Brightness}</dd>

                    <dt>Mqtt Broker</dt>
                    <dd>{config.MqttBroker}</dd>

                    <dt>Mqtt Device Topic</dt>
                    <dd>{config.MqttDeviceTopic}</dd>

                    <dt>Mqtt Group Topic</dt>
                    <dd>{config.MqttGroupTopic}</dd>
                </dl>
            </div>
        </div>
    )
}
