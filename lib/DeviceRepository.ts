import {readFileSync} from "fs";
import {Device} from "./Device";

export function getAllDevices(): Device[] {
    const devicesRaw = readFileSync('./devices.json', 'utf-8');
    let devices = JSON.parse(devicesRaw);
    devices.forEach((dev) => {
        if (typeof dev.readonly === 'undefined') {
            dev.readonly = false;
        }
    });

    return devices;
}

export function getDevice(deviceId: string): Device {
    return getAllDevices().find(device => device.id === deviceId);
}
