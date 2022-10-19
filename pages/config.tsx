import Layout from "../components/layout";
import Head from "next/head";
import Content from "../components/Content";
import DeviceSystemInfo from "../components/Device/DeviceSystemInfo";

export default function Config() {
    return (
        <Layout>
            <Head>
                <title>Config</title>
            </Head>
            <Content>
                <DeviceSystemInfo />
            </Content>
        </Layout>
    )
}
