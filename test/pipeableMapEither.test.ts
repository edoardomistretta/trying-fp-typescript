import { pipe } from "@app/example/overloads-pipe";
import { left, right } from "@app/type/Either";
import { pipeableMapEither } from "@app/type/PipeableMapEither";

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
