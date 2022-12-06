import {Device} from "../../lib/Device";
import {useDeviceContext} from "../DeviceContext";
import {useRouter} from "next/router";
import useSWR from "swr";
import fetcher from "../../lib/fetch";
import {Loading} from "@nextui-org/react";
import TileButton from "../Ui/TileButton";

export default function DeviceSelector() {
    const deviceContext = useDeviceContext();
    const router = useRouter();

    const { data, error } = useSWR<Device[]>(
        '/api/device/',
        fetcher,
        { refreshInterval: 3600000 }
    );
    const isLoading = !error && !data;
    const allDevices = data;

    const onDeviceSelected = (device: Device) => {
        deviceContext.setDevice(device);
        router.push('/');
    };

    if (isLoading) {
        return (<Loading />)
    }
    if (error) {
        return (<div>ERROR</div>)
    }

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-medium">Select a Device</h2>
            <div className={"flex flex-wrap gap-3"}>
                {allDevices.map((device: Device) => {
                    return (
                        <TileButton key={device.id} label={device.name} onClick={() => onDeviceSelected(device)} />
                    )
                })}
            </div>
        </div>
    )
}
