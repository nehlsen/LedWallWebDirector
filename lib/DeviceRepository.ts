import {readFileSync} from "fs";
import {Device} from "./Device";

export function getAllDevices(): Device[] {
    const devices = readFileSync('./devices.json', 'utf-8');
    return JSON.parse(devices);
}

export function getDevice(deviceId: string): Device {
    return getAllDevices().find(device => device.id === deviceId);
}
