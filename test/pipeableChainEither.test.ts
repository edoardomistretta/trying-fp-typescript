import { pipe } from "@fn/pipe";
import { left, right } from "@type/Either";
import { pipeableChainEither } from "@type/PipeableChainEither";

describe("Pipeable Chain Either", () => {
  it("should return right number", () => {
    const r = pipe(
      right(1),
      pipeableChainEither((n) => right(n * 2)),
      pipeableChainEither((n) => right(n * 2))
    );
    expect(r).toStrictEqual(right(4));
  });
  it("should return left path", () => {
    const l = pipe(
      left(1),
      pipeableChainEither((n) => right(n * 2)),
      pipeableChainEither((n) => right(n * 2))
    );
    expect(l).toStrictEqual(left(1));
  });
});
