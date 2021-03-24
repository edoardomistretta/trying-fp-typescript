import { left, right } from "@type/Either";

describe("Either", () => {
  it("should return right", () => {
    const r = right(1);
    expect(r).toStrictEqual({ _tag: "Right", right: 1 });
  });
  it("should return left", () => {
    const l = left(0);
    expect(l).toStrictEqual({ _tag: "Left", left: 0 });
  });
});
