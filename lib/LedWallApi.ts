import {Device} from "./Device";
import {LedWallSystemInfo} from "./LedWallSystemInfo";
import useSWR from 'swr';
import fetcher from "./fetch";

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

// LedWallPreset[]
// /api/v2/led/presets
