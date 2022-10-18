import {Device} from "../lib/Device";
import Link from "next/link";

export default function TopBar({device}: {device?: Device}) {
    const menu = (
        <div className="flex justify-end">
            <Link href="/" replace>
                <a>DEV</a>
            </Link>
            <Link href="/preset" replace>
                <a>Preset</a>
            </Link>
            <Link href="/mode" replace>
                <a>Mode</a>
            </Link>
            <Link href="/config" replace>
                <a>Config</a>
            </Link>
        </div>
    );

    return (
        <header className="text-base font-medium text-gray-500 border-b-2 border-gray-100 p-3 mb-2 flex">
            {device ?
                <div>{device.name}</div>
                :
                <div>LedWall Web-Director</div>
            }
            {device ? menu : <></>}
        </header>
    );
}
