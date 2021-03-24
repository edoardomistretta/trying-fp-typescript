import { pipe } from "@fn/pipe";
import { left, right } from "@type/Either";
import { pipeableMapEither } from "@type/PipeableMapEither";

describe("Pipeable Map Either", () => {
  it("should return right number", () => {
    const r = pipe(
      right(1),
      pipeableMapEither((n) => n * 2),
      pipeableMapEither((n) => n * 2)
    );
    expect(r).toStrictEqual(right(4));
  });
  it("should return left path", () => {
    const l = pipe(
      left("MyError"),
      pipeableMapEither((n) => n * 2),
      pipeableMapEither((n) => n * 2)
    );
    expect(l).toStrictEqual(left("MyError"));
  });
});
