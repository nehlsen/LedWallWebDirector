import Layout from "../components/layout";
import Head from "next/head";
import DeviceSelector from "../components/Device/DeviceSelector";
import {GetStaticProps} from "next";
import {getDevices} from "../lib/devices";
import {useState} from "react";
import {Device} from "../lib/Device";
import DeviceStatus from "../components/Device/DeviceStatus";
import LedWallPresets from "../components/LedWallPresets";
import DeviceSystemInfo from "../components/Device/DeviceSystemInfo";

export default function devices({allDevices}) {
    const [device, setDevice] = useState<Device|null>(null);

    return (
        <Layout>
            <Head>
                <title>Devices</title>
            </Head>
            <DeviceSelector devices={allDevices} selectCallback={(device: Device) => setDevice(device)} />
            {device ? <h2>{device.name}</h2> : <>NO DEVICE SELECTED</>}
            {device ? <DeviceStatus device={device} /> : <></>}
            {device ? <LedWallPresets device={device} /> : <></>}
            {device ? <DeviceSystemInfo device={device} /> : <></>}
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
