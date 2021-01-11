import { Person } from "../models/person";

export class Example {
  constructor() {
  }
  helloWorld() {
    console.log('Hello World.')
  }
  test(arg: string, num: Number, obj: Person) {
    console.log('Arg: %s Num: %s', arg, num);
    console.info(obj);
  }
}
