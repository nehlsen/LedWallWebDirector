import LedWallPresets from "../components/LedWallPresets";
import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";
import DeviceOfflineGuard from "../components/Device/DeviceOfflineGuard";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";

export default function PresetSelector() {
    const deviceContext = useDeviceContext();
    if (!deviceContext.device) {
        return (<Link href={"/select-device"} replace>
            <a>Please select a device first</a>
        </Link>);
    }

    return (
        <Layout>
            <Head>
                <title>Presets</title>
            </Head>
            <Content>
                <DeviceOfflineGuard />
                <LedWallPresets />
            </Content>
        </Layout>
    )
}
