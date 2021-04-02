import { pipe } from "@fn/pipe";
import { left, right } from "@type/Either";
import { pipeableCatchAllEither } from "@type/PipeableCatchAllEither";

describe("Pipeable Catch All Either", () => {
  it("should return right number", () => {
    const r = pipe(
      right(1),
      pipeableCatchAllEither((n) => right(n * 2)),
      pipeableCatchAllEither((n) => right(n * 2))
    );
    expect(r).toStrictEqual(right(1));
  });
  it("should return all errors", () => {
    const l = pipe(
      left(1),
      pipeableCatchAllEither((n) => left(n * 2)),
      pipeableCatchAllEither((n) => right(n * 2))
    );
    expect(l).toStrictEqual(right(4));
  });
});
