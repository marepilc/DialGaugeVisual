'use strict';

import { save, restore, circle, fill, noStroke, stroke, line, strokeWidth, width,
         linearScale, PI, rotate, translate, prnt, abs } from "dvlib";
import { opt } from "./visual";


export class Pointer {
    public x: number;
    public y: number;
    public angle: number;
    public angle0: number;
    public currentA: number;
    public step: number
    public direction: string;
    constructor() {
        this.step = 0.05;
    }

    draw() {
        save();
        stroke(opt.options.pointerColor);
        strokeWidth(opt.options.pointerW);
        save();
        translate(this.x, this.y);
        if (this.direction == 'cw') {
            if (this.currentA < this.angle) {
                this.currentA += this.step;
            } else {
                this.currentA = this.angle;
            }
        } else {
            if (this.currentA > this.angle) {
                this.currentA -= this.step;
            } else {
                this.currentA = this.angle;
            }
        }
        rotate(this.currentA);
        line(0, 0, - opt.options.pointerL, 0);
        restore();
        fill(opt.options.pointerColor);
        noStroke();
        circle(this.x, this.y, opt.options.pointerR);
        restore();
    }
}