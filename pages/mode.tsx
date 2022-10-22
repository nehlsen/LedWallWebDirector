import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";
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
