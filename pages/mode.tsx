import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";
import LedWallModeSelector from "../components/LedWallModeSelector";
import DeviceOfflineGuard from "../components/Device/DeviceOfflineGuard";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";

export default function ModeOptions() {
    const deviceContext = useDeviceContext();
    if (!deviceContext.device) {
        return (<Link replace href={"/select-device"}>
            Please select a device first
        </Link>);
    }

    return (
        <Layout>
            <Head>
                <title>Select Mode</title>
            </Head>
            <Content>
                <DeviceOfflineGuard />
                <LedWallModeSelector />
            </Content>
        </Layout>
    )
}
