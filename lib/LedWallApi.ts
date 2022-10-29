import {Device} from "./Device";
import {LedWallSystemInfo} from "./LedWallSystemInfo";
import useSWR from 'swr';
import fetcher from "./fetch";
import {LedWallPreset} from "./LedWallPreset";

export function url(device: Device) {
    return {
        systemInfo: `http://${device.hostname}/api/v2/system/info`,
        presets: `http://${device.hostname}/api/v2/led/presets`,
        presetLoad: `http://${device.hostname}/api/v2/led/preset/load`,
        modes: `http://${device.hostname}/api/v2/led/modes`,
        mode: `http://${device.hostname}/api/v2/led/mode`,
        modeOptions: `http://${device.hostname}/api/v2/led/mode/options`
    };
}

export function useLedWallSystemInfo(device: Device): {
    systemInfo: LedWallSystemInfo,
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<LedWallSystemInfo>(
        url(device).systemInfo,
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
    const { data, error } = useSWR<{presets: string[]}>(
        url(device).presets,
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

export async function activateLedWallPreset(device: Device, preset: LedWallPreset) {
    const response = await fetch(url(device).presetLoad, {
        method: 'POST',
        body: JSON.stringify({name: preset.name})
    });

    return response.json();
}

export function useLedWallModes(device: Device): {
    modes: LedWallMode[],
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<{modes: LedWallMode[]}>(
        url(device).modes,
        fetcher,
        { refreshInterval: 60000 }
    );

    return {
        modes: data ? data.modes : [],
        isLoading: !error && !data,
        isError: error
    }
}

export function useLedWallMode(device: Device): {
    mode: LedWallMode,
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<LedWallMode>(
        url(device).mode,
        fetcher,
        { refreshInterval: 60000 }
    );

    return {
        mode: data,
        isLoading: !error && !data,
        isError: error
    }
}

export async function activateLedWallMode(device: Device, mode: LedWallMode) {
    const response = await fetch(url(device).mode, {
        method: 'POST',
        body: JSON.stringify({name: mode.name})
    });

    return response.json();
}

export async function setLedWallModeOptions(device: Device, modeOptions: object) {
    const response = await fetch(url(device).modeOptions, {
        method: 'POST',
        body: JSON.stringify(modeOptions)
    });

    return response.json();
}
