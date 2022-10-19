import Head from 'next/head'
import Layout from '../components/layout'
import DeviceSelector from "../components/Device/DeviceSelector";

export default function SelectDevice() {
    return (
        <Layout home>
            <Head>
                <title>Devices</title>
            </Head>
            <DeviceSelector />
        </Layout>
    )
}
