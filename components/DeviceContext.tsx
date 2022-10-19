import {createContext, useContext, useState} from "react";
import {Device} from "../lib/Device";

interface DeviceContextType {
    device: any,
    setDevice: any
}

export const DeviceContext = createContext<DeviceContextType|null>(null);

export const DeviceProvider = ({ children }) => {
    const [device, setDevice] = useState<Device|null>(null);

    return (
        <DeviceContext.Provider value={{device, setDevice}}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDeviceContext = () => useContext(DeviceContext);
