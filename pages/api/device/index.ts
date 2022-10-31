import { NextApiRequest, NextApiResponse } from 'next'
import {getAllDevices} from "../../../lib/DeviceRepository";

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(getAllDevices());
}
