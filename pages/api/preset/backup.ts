import {NextApiRequest, NextApiResponse} from 'next'
import {getDevice} from "../../../lib/DeviceRepository";
import {url} from "../../../lib/LedWallApi";
import {writeFileSync} from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {deviceId} = req.query;
    const device = getDevice(deviceId as string);

    fetch(url(device).presetsDump)
        .then(response => response.json())
        .then(json => {
            writeFileSync(`./data/presets-backup-${deviceId}.json`, JSON.stringify(json));
        });

    res.status(200).json({});
}
