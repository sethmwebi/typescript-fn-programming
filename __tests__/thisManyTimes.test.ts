import { thisManyTimes } from "../thisManyTimes";

describe("thisManyTimes function", () => {
  it("should call the function up to the specified number of times", () => {
    const mockFn = jest.fn((x: number) => x * 2);
    const limitedFn = thisManyTimes(mockFn, 3);

    // First call
    expect(limitedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call
    expect(limitedFn(3)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(2);

    // Third call
    expect(limitedFn(4)).toBe(8);
    expect(mockFn).toHaveBeenCalledTimes(3);

    // Fouth call (exceeds limit)
    expect(limitedFn(5)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("should behave the same as once(fn) when n=1", () => {
    const mockFn = jest.fn(() => "called");
    const limitedFn = thisManyTimes(mockFn, 1);

    // First call
    expect(limitedFn()).toBe("called");
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call (exceeds limit)
    expect(limitedFn()).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should do nothing if n=0", () => {
    const mockFn = jest.fn(() => "called");
    const limitedFn = thisManyTimes(mockFn, 0);

    // First call
    expect(limitedFn()).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(0);

    // Second call
    expect(limitedFn()).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it("should handle multiple arguments", () => {
    const mockFn = jest.fn((a, b) => a + b);
    const limitedFn = thisManyTimes(mockFn, 2);

    // First call
    expect(limitedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call
    expect(limitedFn(3, 4)).toBe(7);
    expect(mockFn).toHaveBeenCalledTimes(2);

    // Third call (exceeds limit)
    expect(limitedFn(5, 6)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
