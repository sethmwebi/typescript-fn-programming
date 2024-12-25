export const onceIfSuccess = <FNType extends (...args: any[]) => any>(
  fn: FNType,
) => {
  let hasRunSuccessfully = false;

  return ((...args: Parameters<FNType>) => {
    if (!hasRunSuccessfully) {
      try {
        const result = fn(...args);
        hasRunSuccessfully = true;
        return result;
      } catch (error) {
        throw error;
      }
    }
  }) as FNType;
};
