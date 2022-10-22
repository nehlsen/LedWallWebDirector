import Head from 'next/head'
import Layout from '../components/Ui/Layout'
import DeviceSelector from "../components/Device/DeviceSelector";
import Content from "../components/Ui/Content";

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
