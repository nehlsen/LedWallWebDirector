import {NextApiRequest, NextApiResponse} from 'next'
import {getDevice} from "../../../lib/DeviceRepository";
import {readFileSync} from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {deviceId} = req.query;
    const device = getDevice(deviceId as string);
    if (!device) {
        res.status(404).json({});
        return;
    }

    const data = readFileSync(`./data/presets-backup-${deviceId}.json`, 'utf-8');
    const presets = JSON.parse(data);

    res.status(200).json(presets);
}
