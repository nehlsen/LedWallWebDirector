import {Device} from "./Device";
import {LedWallSystemInfo} from "./LedWallSystemInfo";
import useSWR from 'swr';
import fetcher from "./fetch";
import {LedWallPreset} from "./LedWallPreset";
import {LedWallConfig} from "./LedWallConfig";
import {LedWallMode} from "./LedWallMode/LedWallMode";
import {LedWallPresetChangerOptions} from "./LedWallPresetChangerOptions";

export function url(device: Device|null) {
    if (!device) {
        return;
    }

    return {
        systemInfo: `http://${device.hostname}/api/v2/system/info`,
        config: `http://${device.hostname}/api/v2/config`,
        otaUpdate: `http://${device.hostname}/api/v2/ota`,

        presets: `http://${device.hostname}/api/v2/led/presets`,
        presetLoad: `http://${device.hostname}/api/v2/led/preset/load`,
        presetSave: `http://${device.hostname}/api/v2/led/preset/save`,
        presetsDump: `http://${device.hostname}/api/v2/fs/presets.json`,
        presetDelete: `http://${device.hostname}/api/v2/led/preset/delete`,
        presetChangerOptions: `http://${device.hostname}/api/v2/led/presetChanger/options`,

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

export function useLedWallConfig(device: Device): {
    config: LedWallConfig,
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<LedWallConfig>(
        url(device).config,
        fetcher,
        { refreshInterval: 60000 }
    );

    return {
        config: data,
        isLoading: !error && !data,
        isError: error
    }
}

export async function pushLedWallOtaUpdateUrl(device: Device, otaUpdateUrl: string) {
    const response = await fetch(url(device).otaUpdate, {
        method: 'POST',
        body: JSON.stringify({url: otaUpdateUrl})
    });

    return response.json();
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

export async function saveLedWallPreset(device: Device, presetName: string) {
    const response = await fetch(url(device).presetSave, {
        method: 'POST',
        body: JSON.stringify({name: presetName})
    });

    return response.json();
}

export async function deleteLedWallPreset(device: Device, presetName: string) {
    const response = await fetch(url(device).presetDelete, {
        method: 'POST',
        body: JSON.stringify({name: presetName})
    });

    return response.json();
}

export function useLedWallPresetChangerOptions(device: Device): {
    presetChangerOptions: LedWallPresetChangerOptions,
    isLoading: boolean,
    isError: boolean
} {
    const { data, error } = useSWR<LedWallPresetChangerOptions>(
        url(device).presetChangerOptions,
        fetcher,
        { refreshInterval: 60000 }
    );

    return {
        presetChangerOptions: data,
        isLoading: !error && !data,
        isError: error
    }
}

export async function setLedWallPresetChangerOptions(device: Device, presetChangerOptions: LedWallPresetChangerOptions) {
    const response = await fetch(url(device).presetChangerOptions, {
        method: 'POST',
        body: JSON.stringify(presetChangerOptions)
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

export async function activateLedWallMode(device: Device, mode: LedWallMode|string) {
    const response = await fetch(url(device).mode, {
        method: 'POST',
        body: JSON.stringify({name: typeof mode === 'string' ? mode : mode.name})
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
