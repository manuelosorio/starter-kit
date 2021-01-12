import { Example } from "./modules/example";
import { Person } from "./models/person";

const example = new Example();
const exObject: Person = {
  firstName: '',
  lastName: '',
  age: 0
};
example.helloWorld();
exObject.firstName = "Manuel"
exObject.lastName = "Osorio";
exObject.age = 23;
example.test('Hello', 1, exObject)
example.test('bye', 2, {
  firstName: 'John',
  lastName: 'Doe',
  age: 38,
  favoriteFood: 'Pepperoni Pizza'
});
