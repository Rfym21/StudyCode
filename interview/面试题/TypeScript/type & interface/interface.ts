// 接口

interface IPerson {
  name: string;
  age: number
}

const userI: IPerson = {
  name: '张三',
  age: 18
}


interface Point {
  x: number;
  y: number
}

interface Point3d extends Point {
  z: number
}

let obj: Point3d = { x: 1, y: 2, z: 3 }