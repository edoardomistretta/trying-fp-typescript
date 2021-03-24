import { flow } from "@fn/flow";

describe("Flow", () => {
  it("should return correct sum operation", () => {
    const f = flow(
      (n: number) => n + 1,
      (n) => n + 1,
      (n) => n + 1
    );
    expect(f(0)).toStrictEqual(3);
  });
});
