import { onceAndAfter } from "./onceAndAfter";

const squeak = (x: string) => console.log(x, "squeak!!");

const creak = (x: string) => console.log(x, "creak!!");

const makeSound = onceAndAfter(squeak, creak);

makeSound("door");
makeSound("door");
makeSound("door");
makeSound("door");
