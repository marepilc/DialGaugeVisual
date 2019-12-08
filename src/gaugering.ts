'use strict';

import { save, restore, linearScale, PI, ring, height, strokeWidth, stroke, fill,
        blend, textOnArc, textSize, TextAlign, fontFamily} from "dvlib";
import { opt, visualRanges } from "./visual";


export class GaugeRing {
    private _x: number;
    private _y: number;
    private _scale: (n: number) => number;
    constructor(x: number, y: number, min: number, max: number) {
        this._x = x;
        this._y = y;
        this._scale =  linearScale(min, max, PI, PI * 2);
    }

    draw() {
        save();
        strokeWidth(opt.dial.strokeWidth);
        stroke(opt.dial.strokeColor);
        let blendStep = 0;
        for (let i = 0; i < visualRanges.length - 1; i++) {
            fill(blend(opt.dial.color1, opt.dial.color2, blendStep));
            blendStep += (1 / (visualRanges.length - 2));
            ring(this._x, this._y, opt.dial.dialRadius, height - opt.options.pointerR - opt.dial.strokeWidth,
                this._scale(visualRanges[i]), this._scale(visualRanges[i + 1]));
            fill(opt.dialText.fontColor);
            textSize(opt.dialText.fontSize);
            fontFamily(opt.dialText.fontFamily);
            textOnArc(opt.ranges[`range${i + 1}name`], this._x, this._y,
                height - opt.options.pointerR - opt.dial.strokeWidth - opt.dialText.fontSize / 2,
                this._scale(visualRanges[i]) + 0.05, TextAlign.left, true);
        }
        restore();
    }
}

