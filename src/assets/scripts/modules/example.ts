import { Person } from "../models/person";

export class Example {
  helloWorld(): void {
    console.log('Hello World.')
  }
  test(arg: string, num: number, obj: Person): void {
    console.log('Arg: %s Num: %s', arg, num);
    console.log(obj);
  }
}
