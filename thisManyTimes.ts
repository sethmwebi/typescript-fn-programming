export const thisManyTimes = <FNType extends (...args: any[]) => any>(
  fn: FNType,
  n: number,
) => {
  let remainingCalls = n;

  return ((...args: Parameters<FNType>) => {
    if (remainingCalls > 0) {
      remainingCalls--;
      return fn(...args);
    }
  }) as FNType;
};
