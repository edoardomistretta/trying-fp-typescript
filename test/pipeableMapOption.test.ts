import { pipe } from "@app/example/overloads-pipe";
import { none, some } from "@app/type/Option";
import { pipeableMapOption } from "@app/type/PipeableMapOption";

describe("Pipeable Map Option", () => {
  it("should return some value", () => {
    const r = pipe(
      some(1),
      pipeableMapOption((n) => n * 2),
      pipeableMapOption((n) => n * 2)
    );
    expect(r).toStrictEqual(some(4));
  });
  it("should return none", () => {
    const l = pipe(
      none,
      pipeableMapOption((n) => n * 2),
      pipeableMapOption((n) => n * 2)
    );
    expect(l).toStrictEqual(none);
  });
});
