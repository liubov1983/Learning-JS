'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text) {
        let element = document.createElement('div');
        document.body.appendChild(element);
        element.textContent = text;
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        element.style.cssText = param;
    }
}

const item = new Options(300, 350, 'green', 14, 'center');

item.createDiv('note');