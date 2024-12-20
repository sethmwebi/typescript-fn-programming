// export const once = <FNType extends (...args: any[]) => any>(fn: FNType) => {
//   let done = false;
//
//   return ((...args: Parameters<FNType>) => {
//     if (!done) {
//       done = true;
//       return fn(...args);
//     }
//   }) as FNType;
// };
export const once = <FNType extends (...args: any[]) => any>(fn: FNType) => {
  return ((...args: Parameters<FNType>) => {
    if (fn) {
      const result = fn(...args);
      fn = null as any;
      return result;
    }
  }) as FNType;
};
