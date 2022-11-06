import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";
import DeviceSystemInfo from "../components/Device/DeviceSystemInfo";
import DeviceConfig from "../components/Device/DeviceConfig";
import DeviceOfflineGuard from "../components/Device/DeviceOfflineGuard";
import PresetBackup from "../components/Preset/PresetBackup";
import PresetRestore from "../components/Preset/PresetRestore";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";

export default function Config() {
    const deviceContext = useDeviceContext();
    if (!deviceContext.device) {
        return (<Link replace href={"/select-device"}>
            Please select a device first
        </Link>);
    }

    return (
        <Layout>
            <Head>
                <title>Config</title>
            </Head>
            <Content>
                <DeviceOfflineGuard />
                <DeviceSystemInfo />
                <DeviceConfig />

                <br/>
                <PresetBackup />
                <PresetRestore />
            </Content>
        </Layout>
    )
}
