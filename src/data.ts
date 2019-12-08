'use strict';

import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;

export let data: number;

export function transformData(options: VisualUpdateOptions) {
    data = 0;

    try {
        data = options.dataViews[0].single.value as number;
    } catch(error) {
        console.log(error);
    }
}