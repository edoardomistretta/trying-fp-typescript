import { pipe } from "@app/example/overloads-pipe";
import { none, Option, some } from "@app/type/Option";

// type
export type PipeableMapOption = <A, B>(
  f: (a: A) => B
) => (self: Option<A>) => Option<B>;

export const pipeableMapOption: PipeableMapOption = (f) => {
  return (self) => {
    if (self._tag === "Some") {
      return some(f(self.value));
    }
    return none;
  };
};

pipe(
  some(1),
  pipeableMapOption((v) => v * 2)
);
