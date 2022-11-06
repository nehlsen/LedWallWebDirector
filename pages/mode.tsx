import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";
import LedWallMode from "../components/LedWallMode";
import LedWallModeSelector from "../components/LedWallModeSelector";
import DeviceOfflineGuard from "../components/Device/DeviceOfflineGuard";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";

export default function ModeOptions() {
    const deviceContext = useDeviceContext();
    if (!deviceContext.device) {
        return (<Link href={"/select-device"} replace>
            <a>Please select a device first</a>
        </Link>);
    }

    return (
        <Layout>
            <Head>
                <title>Mode Options</title>
            </Head>
            <Content>
                <DeviceOfflineGuard />
                <LedWallMode />
                <LedWallModeSelector />
            </Content>
        </Layout>
    )
}
