enum Color {
  red = 1, green, yellow
}

let c: Color = Color.green
let name1: string = Color[3]
// console.log(c, name1)


// declare function create(o: object | null): void

// create({ prop: 0 })
// create(null)

let someValue: any = "string"

const strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length
// console.log(strLength, strLength1);

function print(labeled: { label: string }): void {
  // console.log(labeled.label)
}

let obj = {
  size: 10,
  label: "size 10"
}
print(obj)

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
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
  return newSquare
}

let mySquare = createSquare({color: "block", width: 11})

// console.log(mySquare)

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src, sub) {
  let result = src.search(sub);

  return result > -1
}

// console.log(mySearch('1', '1'))


interface StringArray {
  [index: number]: string;
}

let myArray: StringArray

myArray = ['Blue', 'Red']

let myStr: string = myArray[1]
// console.log(myStr)

/* ------------------------------------------------------------------------------- */

interface Clockconstructir {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: Clockconstructir, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("Green")
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("Yellow")
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
// console.log(digital, analog)

/* ------------------------------------------------------------------------------- */

interface Named {
  name: string;
}

let x: Named;

let y = { name: "Alice", location: "Seattle" }

x = y
// console.log(x.name)

let a = (a: number) => 0;
let b = (b: number, s: string) => 0;

// console.log(b = a)

/* ------------------------------------------------------------------------------- */

const sym1 = Symbol();
let sym2 = Symbol("key");
console.log(sym1, sym2)

let obj1 = {
  [sym1]: 'value'
}
console.log(obj1[sym1])