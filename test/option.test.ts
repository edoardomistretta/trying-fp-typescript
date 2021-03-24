import { none, some } from "@type/Option";

describe("Option", () => {
  it("should return some", () => {
    const s = some(1);
    expect(s).toStrictEqual({ _tag: "Some", value: 1 });
  });
  it("should return none", () => {
    expect(none).toStrictEqual({ _tag: "None" });
  });
});
