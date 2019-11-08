enum Color {
  red = 1, green, yellow
}

let c: Color = Color.green
let name1: string = Color[3]
console.log(c, name1)


// declare function create(o: object | null): void

// create({ prop: 0 })
// create(null)

let someValue: any = "string"

const strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length
console.log(strLength, strLength1);

function print(labeled: { label: string }): void {
  console.log(labeled.label)
}

let obj = {
  size: 10,
  label: "size 10"
}
print(obj)
