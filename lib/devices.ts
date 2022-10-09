import {Device} from "./Device";
import {readFile} from "fs";

export function getDevices(): Device[] {
    readFile("../devices.json", (err, data) => {
        console.log(data);
    });
    return [
        {id: 'realOne', name: 'real world example', hostname: "10.13.37.221"},
        {id: 'fakeIsIt', name: 'Fancy Wall', hostname: "fancy.somewhere"},
    ];
}
