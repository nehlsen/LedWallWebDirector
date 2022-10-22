import LedWallPresets from "../components/LedWallPresets";
import Layout from "../components/Ui/Layout";
import Head from "next/head";
import Content from "../components/Ui/Content";

export default function PresetSelector() {
    return (
        <Layout>
            <Head>
                <title>Presets</title>
            </Head>
            <Content>
                <LedWallPresets />
            </Content>
        </Layout>
    )
}
