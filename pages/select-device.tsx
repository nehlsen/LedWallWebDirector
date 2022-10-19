import Head from 'next/head'
import Layout from '../components/layout'
import DeviceSelector from "../components/Device/DeviceSelector";
import Content from "../components/Content";

export default function SelectDevice() {
    return (
        <Layout>
            <Head>
                <title>Devices</title>
            </Head>
            <Content>
                <DeviceSelector />
            </Content>
        </Layout>
    )
}
