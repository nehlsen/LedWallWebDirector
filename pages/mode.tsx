import Layout from "../components/layout";
import Head from "next/head";
import Content from "../components/Content";
import LedWallMode from "../components/LedWallMode";

export default function ModeOptions() {
    return (
        <Layout>
            <Head>
                <title>Mode Options</title>
            </Head>
            <Content>
                <LedWallMode />
            </Content>
        </Layout>
    )
}
