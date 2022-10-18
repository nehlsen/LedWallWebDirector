import {isModeMultiBars} from "../../lib/LedWallMode/LedWallModeUtils";
import MultiBarsOptions from "./MultiBarsOptions";

interface Params {
    mode: LedWallMode
}

export default function ModeOptions({mode}: Params) {
    if (isModeMultiBars(mode)) {
        return (
            <MultiBarsOptions mode={mode} />
        )
    } else {
        console.log('its a .... mode ...')
    }

    return (
        <div>options not avail</div>
    );
}
