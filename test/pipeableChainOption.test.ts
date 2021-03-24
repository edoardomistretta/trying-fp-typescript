import { pipe } from "@fn/pipe";
import { none, some } from "@type/Option";
import { pipeableChainOption } from "@type/PipeableChainOption";

describe("Pipeable Chain Option", () => {
  it("should return some value", () => {
    const r = pipe(
      some(1),
      pipeableChainOption((n) => some(n * 2)),
      pipeableChainOption((n) => some(n * 2))
    );
    expect(r).toStrictEqual(some(4));
  });
  it("should return none", () => {
    const l = pipe(
      none,
      pipeableChainOption((_n) => none),
      pipeableChainOption((n) => some(n * 2))
    );
    expect(l).toStrictEqual(none);
  });
});
