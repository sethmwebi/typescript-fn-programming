import { onceIfSuccess } from "../onceIfSuccess";

describe("onceIfSuccess function", () => {
  it("should call the function successfully only once", () => {
    const mockFn = jest.fn((x: number) => x * 2);
    const wrappedFn = onceIfSuccess(mockFn);

    // First call: success
    expect(wrappedFn(2)).toBe(4);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call: blocked (no success allowed after the first)
    expect(wrappedFn(3)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should allow retries if the function throws an error", () => {
    let callCount = 0;

    const mockFn = jest.fn(() => {
      callCount++;
      if (callCount < 3) {
        throw new Error("Failure");
      }
      return "Success";
    });
    const wrappedFn = onceIfSuccess(mockFn);

    // First call: fails
    expect(() => wrappedFn()).toThrow("Failure");
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call: succeeds
    expect(() => wrappedFn()).toThrow("Failure");
    expect(mockFn).toHaveBeenCalledTimes(2);

    // Third call: succeeds
    expect(wrappedFn()).toBe("Success");
    expect(mockFn).toHaveBeenCalledTimes(3);

    // Fourth call: blocked (success already happened)
    expect(wrappedFn()).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("should do nothing if the function has already succeeded", () => {
    const mockFn = jest.fn(() => "Success");
    const wrappedFn = onceIfSuccess(mockFn);

    // First call: success
    expect(wrappedFn()).toBe("Success");
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call: blocked
    expect(wrappedFn()).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should handle multiple arguments properly", () => {
    const mockFn = jest.fn((a, b) => a + b);
    const wrappedFn = onceIfSuccess(mockFn);

    // First call: success
    expect(wrappedFn(1, 2)).toBe(3);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call: blocked
    expect(wrappedFn(3, 4)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should allow retries on exceptions with multiple arguments", () => {
    const mockFn = jest.fn((a, b) => {
      if (a + b < 5) {
        throw new Error("Failure");
      }
      return a + b;
    });
    const wrappedFn = onceIfSuccess(mockFn);

    // First call: fails
    expect(() => wrappedFn(1, 2)).toThrow("Failure");
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Second call: fails again
    expect(() => wrappedFn(1, 2)).toThrow("Failure");
    expect(mockFn).toHaveBeenCalledTimes(2);

    // Third call: success
    expect(wrappedFn(3, 3)).toBe(6);
    expect(mockFn).toHaveBeenCalledTimes(3);

    // Fourth call: blocked
    expect(wrappedFn(4, 4)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
