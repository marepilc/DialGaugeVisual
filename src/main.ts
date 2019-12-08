'use strict';

import { clear, width, height, linearScale, PI } from "dvlib";
import { Pointer } from "./pointer";
import { GaugeRing } from "./gaugering";
import { data } from "./data";
import { opt, visualRanges, previousState, pointer } from "./visual";


let gRing: GaugeRing;

export function setup() {
    let scale =  linearScale(visualRanges[0], visualRanges[visualRanges.length - 1], 0, PI);
    pointer.x = width / 2;
    pointer.y = height - opt.options.pointerR;
    pointer.angle = scale(data);
    pointer.angle0 = scale(previousState.v);
    pointer.currentA = pointer.angle0;
    if (pointer.currentA < pointer.angle) {
        pointer.direction = 'cw';
    } else {
        pointer.direction = 'ccw';
    }
    gRing = null;
    gRing = new GaugeRing(width / 2, height - opt.options.pointerR,
        visualRanges[0], visualRanges[visualRanges.length - 1])
    previousState.v = data;
}


export function draw() {
    clear();
    gRing.draw();
    pointer.draw();
}