import '../styles/global.css'
import 'rc-slider/assets/index.css';
import { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react";
import {DeviceProvider} from "../components/DeviceContext";
import TopBar from "../components/Ui/TopBar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <DeviceProvider>
                <TopBar />
                <Component {...pageProps} />
            </DeviceProvider>
        </NextUIProvider>
    )
}
