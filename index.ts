// interface Person {
//   name: string;
//   age: number;
//   other: string;
// }
//
// const data: Person[] = [
//   { name: "John", age: 23, other: "xxx" },
//   { name: "Paul", age: 18, other: "yyy" },
//   { name: "George", age: 16, other: "zzz" },
//   { name: "Ringo", age: 25, other: "ttt" },
// ];
//
// const isAdult = (person: Person) => person.age >= 21;
// const result2 = data.filter(isAdult);
// console.log(result2);
// function factorial(n: number): number {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
//
// console.log(factorial(5));
// function newCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
//
// const nc = newCounter();
// console.log(typeof nc);
// console.log(nc());
// console.log(nc());
// console.log(nc());
// const fact = (n: number): number => (n === 0 ? 1 : n * fact(n - 1));
// console.log(fact(5));
// function sum(...args: number[]): number {
//   return args.reduce((acc, value) => acc + value, 0);
// }
//
// const x = [1, 2, 3];
// const y = sum(...x);
// console.log(y);
// const f = [1, 2, 3];
// const g = [4, ...f, 5];
// const h = [...f, ...g];
// console.log(h);
// type SaluteConstructor = {
//   new (x: string): {
//     x: string;
//     salute(y: string): void;
//   };
// };
//
// const makeSaluteClass = (term: string): SaluteConstructor => {
//   return class {
//     x: string;
//     constructor(x: string) {
//       this.x = x;
//     }
//
//     salute(y: string): void {
//       console.log(`${this.x} says "${term}" to ${y}`);
//     }
//   };
// };
// const Greeter = makeSaluteClass("Hello");
// const greeterInstance = new Greeter("Ednah");
// greeterInstance.salute("Seth");
// const Spanish = makeSaluteClass("HOLA");
// new Spanish("ALFA").salute("BETA");
// new (makeSaluteClass("HELLO"))("GAMMA").salute("DELTA");
// type SaluteClass = {
//   new (x: string): {
//     salute(y: string): void;
//   };
// };
// const fullSalute = (c: SaluteClass, x: string, y: string): void =>
//   new c(x).salute(y);
//
// const French = makeSaluteClass("BON JOUR");
// fullSalute(French, "EPSILON", "ZETA");
// const upwardFactorial = (n: number): number => {
// import { GraphQLError } from "graphql";
//
// export class AppError extends GraphQLError {
//   constructor(message: string, code: string = "INTERNAL_SERVER_ERROR", status: number = 500) {
//     super(message, {
//       extensions: {
//         code,
//         status,
//       },
//     });
//   }
// }
//
// export const handleError = (error: unknown, defaultMessage: string = "An unexpected error occurred") => {
//   console.error(error); // Log the error
//   if (error instanceof AppError) {
//     throw error;
//   }
//   throw new AppError(defaultMessage);
// };
//   if (n < 0) throw new Error("Factorial is not defined for negative numbers");
//   if (n === 0) return 1;
//
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };
//
// export { upwardFactorial };
// const once = <FNType extends (...args: any[]) => any>(fn: FNType) => {
//   let done = false
//
//   return ((...args: Parameters<FNType>) => {
//     if(!done){
//       done = true
//       return fn(...args)
//     }
//   }) as FNType
// }
//
// const billOnce = once(billTheUser)
// const squeak = (a: string) => console.log(a, " squeak!!");
