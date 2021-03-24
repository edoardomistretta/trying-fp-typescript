import { pipe } from "@fn/pipe";

describe("Pipe", () => {
  it("should return correct sum operation", () => {
    const p = pipe(
      0,
      (n) => n + 1,
      (n) => n + 1,
      (n) => n + 1
    );
    expect(p).toStrictEqual(3);
  });
});
