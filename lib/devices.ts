import {Device} from "./Device";

export function getDevices(): Device[] {
    return [
        {id: 'fakeIsIt', name: 'Fancy Wall', hostname: "fancy.somewhere"},
    ];
}
