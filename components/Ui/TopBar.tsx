import Link from "next/link";
import {useDeviceContext} from "../DeviceContext";
import Image from "next/image";
import {AdjustmentsHorizontalIcon, BanknotesIcon, Cog6ToothIcon} from "@heroicons/react/24/outline";

function MenuItem({href, label, icon}: {href: string, label?: string, icon?: React.ReactNode}) {
    return (
        <Link replace href={href} className="flex-1 w-7 text-gray-500 hover:text-gray-800 mx-2">
            {icon ? icon : ""}
            {label ? label : ""}
        </Link>
    )
}

export default function TopBar() {
    const deviceContext = useDeviceContext();

    const menu = (
        <div className="flex-none flex flex-row items-center">
            <MenuItem href={"/preset"} icon={(<BanknotesIcon />)} />
            <MenuItem href={"/mode"} icon={(<AdjustmentsHorizontalIcon />)} />
            <MenuItem href={"/config"} icon={(<Cog6ToothIcon />)} />
        </div>
    );

    return (
        <header className="p-2 lg:px-12 lg:py-4 mb-2 flex items-center bg-indigo-100 shadow-lg shadow-indigo-100/50">
            <Link replace href={"/select-device"} className="leading-3">
                <Image src={"/images/ledwall.svg"} alt="logo" width={28} height={28} className="flex-none" />
            </Link>

            <div className="ml-2 flex-1 text-base font-medium text-gray-500">
                {deviceContext.device ? deviceContext.device.name : "LedWall Web-Director"}
            </div>

            {deviceContext.device ? menu : <></>}
        </header>
    );
}
