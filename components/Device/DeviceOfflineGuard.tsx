import {useDeviceContext} from "../DeviceContext";
import {useLedWallSystemInfo} from "../../lib/LedWallApi";
import {useRouter} from "next/router";

export default function DeviceOfflineGuard() {
    const deviceContext = useDeviceContext();
    const {isError} = useLedWallSystemInfo(deviceContext.device);
    const router = useRouter();

    if (isError) {
        router.push('/');
    }

    return (
        <></>
    );
}