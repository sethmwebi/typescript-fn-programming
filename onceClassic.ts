export function once<FNType extends (...args: any[]) => any>(
  fn: FNType,
): (...args: Parameters<FNType>) => ReturnType<FNType> | undefined {
  let hasRun = false;
  let result: ReturnType<FNType> | undefined;

  return function (
    this: unknown,
    ...args: Parameters<FNType>
  ): ReturnType<FNType> | undefined {
    if (!hasRun) {
      hasRun = true;
      result = fn.apply(this, args);
      return result;
    }
  };
}

function greet(name: string): string {
  console.log("Greeting:", name);
  return `Hello, ${name}`;
}

const greetOnce = once(greet);

console.log(greetOnce("Ivy"));
console.log(greetOnce("Diana"));
console.log(greetOnce("Millie"));
