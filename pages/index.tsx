import Head from 'next/head'
import Layout from '../components/Ui/Layout'
import DeviceStatus from "../components/Device/DeviceStatus";
import {useDeviceContext} from "../components/DeviceContext";
import Link from "next/link";
import Content from "../components/Ui/Content";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Home() {
    const deviceContext = useDeviceContext();
    const router = useRouter();

    useEffect(() => {
        if (!deviceContext.device) {
            router.push('/select-device');
        }/* else {
            router.push('/preset');
        }*/
    }, [deviceContext.device]);

    if (deviceContext.device) {
        return (
            <Layout>
                <Head>
                    <title>{deviceContext.device.name}</title>
                </Head>

                <Content>
                    <h2>{deviceContext.device.name}</h2>
                    <DeviceStatus />
                </Content>
            </Layout>
        )
    }

    return (
        <Layout>
            <Head>
                <title>Devices</title>
            </Head>
            <Content>
                <Link href="/select-device">
                    Select Device
                </Link>
            </Content>
        </Layout>
    )
}
