import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";
import LedWallMode from "../components/LedWallMode";
import DeviceOfflineGuard from "../components/Device/DeviceOfflineGuard";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";
import PresetSave from "../components/Preset/PresetSave";

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
                <title>Mode Options</title>
            </Head>
            <Content>
                <DeviceOfflineGuard />
                <LedWallMode />
                <PresetSave />
            </Content>
        </Layout>
    )
}
