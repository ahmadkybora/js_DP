/**
 * Solid principles
 * Liskov Substitution Principle
 * LSP
 * اصول سالید قانون دوم
 * اصل جایگزینی لیسکوف
 * L word
 * این اصل توضیح میدهد که هر کلاس فقط مخصوص انجام یک کار است 
 * بطور مثال اگر کلاسی برای اعتبار سنجی داد ها ساختید
 * نباید در کلاس کاری بغیر از وضایف اعتبار سنجی انجام دهید
 * بطور مثال کلاس ریکویست ولیدیشن در لاراول که این مثال را پیاده سازی کرده
 */

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() { return this._width; }
    get height() { return this._height; }

    set width(value) { this._width = value; }
    set height(value) { this._height = value; }

    get area() {
        return this._width * this._height;
    }

    toString() {
        return `${this._width}×${this._height}`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    set width(value) {
        this._width = this._height = value;
    }

    set height(value) {
        this._width = this._height = value;
    }
}

let useIt = function(rc) {
    let width = rc._width;
    rc.height = 10;
    console.log(
        `Expected area of ${10*width}, ` +
        `got ${rc.area}`
    );
};

let rc = new Rectangle(2, 3);
useIt(rc);

let sq = new Square(5);
useIt(sq);