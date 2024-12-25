import { once } from "../onceClassic";

describe("once function", () => {
  it("should call the function only once", () => {
    const mockFn = jest.fn((x: number) => x * 2);
    const wrappedFn = once(mockFn);

    // First call
    expect(wrappedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call
    expect(wrappedFn(3)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1); // No additional call
  });

  it("should preserve the correct `this` context", () => {
    const obj = {
      value: 42,
      getValue: function () {
        return this.value;
      },
    };

    const wrappedGetValue = once(obj.getValue);

    // Bind `this` context to `obj`
    const boundGetValue = wrappedGetValue.bind(obj);

    // First call
    expect(boundGetValue()).toBe(42);

    // Second call
    expect(boundGetValue()).toBeUndefined();
  });
});
