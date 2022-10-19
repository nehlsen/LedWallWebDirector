import Head from 'next/head'
import Layout from '../components/layout'
import DeviceStatus from "../components/Device/DeviceStatus";
import LedWallMode from "../components/LedWallMode";
import LedWallPresets from "../components/LedWallPresets";
import DeviceSystemInfo from "../components/Device/DeviceSystemInfo";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";
import Content from "../components/Content";

export default function Home() {
    const deviceContext = useDeviceContext();

    if (deviceContext.device) {
        return (
            <Layout>
                <Head>
                    <title>{deviceContext.device.name}</title>
                </Head>

                <h2>{deviceContext.device.name}</h2>
                <DeviceStatus />
                <LedWallMode />
                <LedWallPresets />
                <DeviceSystemInfo />
            </Layout>
        )
    }

    return (
        <Layout home>
            <Head>
                <title>Devices</title>
            </Head>
            <Content>
                <div>
                    no device ...
                </div>
                <Link href="/select-device">
                    <a>Select Device</a>
                </Link>
            </Content>
        </Layout>
    )
}
