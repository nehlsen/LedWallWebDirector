import Head from 'next/head'
import Layout from '../components/layout'
import {useState} from "react";
import {Device} from "../lib/Device";
import DeviceSelector from "../components/Device/DeviceSelector";
import DeviceStatus from "../components/Device/DeviceStatus";
import LedWallMode from "../components/LedWallMode";
import LedWallPresets from "../components/LedWallPresets";
import DeviceSystemInfo from "../components/Device/DeviceSystemInfo";
import {GetStaticProps} from "next";
import {getDevices} from "../lib/devices";

export default function Home({allDevices}) {
    const [device, setDevice] = useState<Device|null>(null);

    if (device) {
        return (
            <Layout>
                <Head>
                    <title>{device.name}</title>
                </Head>
                <h2>{device.name}</h2>
                <DeviceStatus device={device} />
                <LedWallMode device={device} />
                <LedWallPresets device={device} />
                <DeviceSystemInfo device={device} />
            </Layout>
        )
    }

    return (
        <Layout home>
            <Head>
                <title>Devices</title>
            </Head>
            <DeviceSelector devices={allDevices} selectCallback={(device: Device) => setDevice(device)} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allDevices = getDevices()
    return {
        props: {
            allDevices
        }
    }
}
