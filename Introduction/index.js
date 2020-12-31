"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
let c = Color.green;
let name1 = Color[3];
// console.log(c, name1)
// declare function create(o: object | null): void
// create({ prop: 0 })
// create(null)
let someValue = "string";
const strLength = someValue.length;
let strLength1 = someValue.length;
// console.log(strLength, strLength1);
function print(labeled) {
    // console.log(labeled.label)
}
let obj = {
    size: 10,
    label: "size 10"
};
print(obj);
function createSquare(config) {
    let newSquare = {
        color: "white",
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "block", width: 11 });
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let myArray;
myArray = ['Blue', 'Red'];
let myStr = myArray[1];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("Green");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("Yellow");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
let x;
let y = { name: "Alice", location: "Seattle" };
x = y;
// console.log(x.name)
let a = (a) => 0;
let b = (b, s) => 0;
// console.log(b = a)
/* ------------------------------------------------------------------------------- */
const sym1 = Symbol();
let sym2 = Symbol("key");
console.log(sym1, sym2);
let obj1 = {
    [sym1]: 'value'
};
console.log(obj1[sym1]);
//# sourceMappingURL=index.js.map