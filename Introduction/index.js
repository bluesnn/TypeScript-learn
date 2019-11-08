"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
let c = Color.green;
let name1 = Color[3];
console.log(c, name1);
// declare function create(o: object | null): void
// create({ prop: 0 })
// create(null)
let someValue = "string";
const strLength = someValue.length;
let strLength1 = someValue.length;
console.log(strLength, strLength1);
function print(labeled) {
    console.log(labeled.label);
}
let obj = {
    size: 10,
    label: "size 10"
};
print(obj);
//# sourceMappingURL=index.js.map