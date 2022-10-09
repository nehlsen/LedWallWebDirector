import {Device} from "./Device";
import {LedWallSystemInfo} from "./LedWallSystemInfo";
import useSWR from 'swr';
import fetcher from "./fetch";
import {LedWallPreset} from "./LedWallPreset";

export function useLedWallSystemInfo(device: Device): {
    systemInfo: LedWallSystemInfo,
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<LedWallSystemInfo>(
        `http://${device.hostname}/api/v2/system/info`,
        fetcher,
        { refreshInterval: 60000 }
    );

    return {
        systemInfo: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function useLedWallPresets(device: Device): {
    presets: LedWallPreset[],
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<{presets: String[]}>(
        `http://${device.hostname}/api/v2/led/presets`,
        fetcher,
        { refreshInterval: 60000 }
    );

    const presets = data ?
        data.presets.map((stringName): LedWallPreset => {
            return {name: stringName};
        }) :
        [];

    return {
        presets: presets,
        isLoading: !error && !data,
        isError: error
    }
}

/*

POST http://{{host}}/api/v2/led/preset/load
Content-Type: application/json

{
  "name": "lightningSparkle"
}
///
{
"name":"bar-baz-2ooo",
"mode":"MultiBars",
"options":{"fadeRate":200,"barTravelSpeed":245,"numberOfBars":3,"maximumFrameDelay":7}
}
 */

export async function activateLedWallPreset(device: Device, preset: LedWallPreset) {
    const response = await fetch(`http://${device.hostname}/api/v2/led/preset/load`, {
        method: 'POST',
        body: JSON.stringify({name: preset.name})
    });

    return response.json();
}
