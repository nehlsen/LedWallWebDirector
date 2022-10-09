import Layout from "../components/layout";
import Head from "next/head";
import DeviceSelector from "../components/DeviceSelector";
import {GetStaticProps} from "next";
import {getDevices} from "../lib/devices";
import {useState} from "react";
import {Device} from "../lib/Device";
import DeviceStatus from "../components/DeviceStatus";

export default function devices({allDevices}) {
    const [device, setDevice] = useState<Device|null>(null);

    return (
        <Layout>
            <Head>
                <title>Devices</title>
            </Head>
            <DeviceSelector devices={allDevices} selectCallback={(device: Device) => setDevice(device)} />
            <DeviceStatus device={device} />
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
