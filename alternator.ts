export const alternator = <FN1 extends () => any, FN2 extends () => any>(
  fn1: FN1,
  fn2: FN2,
) => {
  let toggle = false;

  return () => {
    toggle = !toggle;
    return toggle ? fn1() : fn2();
  };
};
