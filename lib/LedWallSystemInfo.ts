/*
http://10.13.37.221/api/v2/system/info

HTTP/1.1 200
Content-Type: application/json
Content-Length: 354

{
  "idfVersion": "v4.0.1-412-g820621687-dirty",
  "cores": 2,
  "chip_revision": 1,
  "reset_reason": "Reset due to power-on event",
  "restarts": 45,
  "projectName": "LedWall",
  "projectVersion": "v1.0.0-72-gf31270e-dirty",
  "compileTime": "19:50:14",
  "compileDate": "Feb 23 2021",
  "EBLi_version": "c067be1",
  "EBLi_components": "status, fs, wifi, mqtt, http, ota, config, time, sensors"
}
*/
export interface LedWallSystemInfo {
    projectVersion: string,
    compileTime: string,
    compileDate: string
}
