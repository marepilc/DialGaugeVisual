/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser {
      public options: Options = new Options();
      public ranges: Ranges = new Ranges();
      public dial: Dial = new Dial();
      public dialText: DialText = new DialText();
      }

export class Options {
    public pointerColor: string = '#BB2B1A';
    public pointerR: number = 12;
    public pointerL: number = 100;
    public pointerW: number = 4;
    public pointerSpeed: number = 0.01;
}

export class Ranges {
    public value0: number = 0;
    public range1name: string = '';
    public range1value: number = null;
    public range2name: string = '';
    public range2value: number = null;
    public range3name: string = '';
    public range3value: number = null;
    public range4name: string = '';
    public range4value: number = null;
    public range5name: string = '';
    public range5value: number = null;
    public range6name: string = '';
    public range6value: number = null;
}

export class Dial {
    public strokeWidth: number = 2;
    public strokeColor: string = '#ffffff';
    public color1: string = '#244427';
    public color2: string = '#831B10';
    public dialRadius: number = 50;
}

export class DialText {
    public fontSize: number = 18;
    public fontFamily: string = 'Verdana';
    public fontColor: string = '#000000';
}
