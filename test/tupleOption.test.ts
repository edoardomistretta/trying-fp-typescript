import { tupleOption } from "@fn/tupleOption";
import { none, some } from "@type/Option";

describe("Tuple option", () => {
  it("should return some", () => {
    expect(tupleOption(some(0), some(2), some(4))).toStrictEqual(
      some([0, 2, 4])
    );
  });
  it("should return none", () => {
    expect(tupleOption(some(0), none, some(4))).toStrictEqual(none);
  });
});
