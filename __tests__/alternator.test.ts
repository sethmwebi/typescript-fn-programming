import { alternator } from "../alternator";

describe("alternator function", () => {
  it("should alternate between fn1 and fn2 on each call", () => {
    const fn1 = jest.fn(() => "fn1 called");
    const fn2 = jest.fn(() => "fn2 called");

    const alternatingFn = alternator(fn1, fn2);

    // First call, should call fn1
    expect(alternatingFn()).toBe("fn1 called");
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(0);

    // Second call, should invoke fn2
    expect(alternatingFn()).toBe("fn2 called");
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);

    // Third call, should invoke fn1 again
    expect(alternatingFn()).toBe("fn1 called");
    expect(fn1).toHaveBeenCalledTimes(2);
    expect(fn2).toHaveBeenCalledTimes(1);

    // Fourth call, should invoke fn2 again
    expect(alternatingFn()).toBe("fn2 called");
    expect(fn1).toHaveBeenCalledTimes(2);
    expect(fn2).toHaveBeenCalledTimes(2);
  });

  it("should handle functions with different return values", () => {
    const fn1 = jest.fn(() => "first");
    const fn2 = jest.fn(() => "second");

    const alternatingFn = alternator(fn1, fn2);

    expect(alternatingFn()).toBe("first");
    expect(alternatingFn()).toBe("second");
    expect(alternatingFn()).toBe("first");
    expect(alternatingFn()).toBe("second");
  });

  it("should toggle correctly when used with asynchronous functions", async () => {
    const fn1 = jest.fn(() => Promise.resolve("fn1 async called"));
    const fn2 = jest.fn(() => Promise.resolve("fn2 async called"));

    const alternatingFn = alternator(fn1, fn2);

    // First call, should invoke fn1
    await expect(alternatingFn()).resolves.toBe("fn1 async called");
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(0);

    // Second call, should invoke fn2
    await expect(alternatingFn()).resolves.toBe("fn2 async called");
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
  });
});
