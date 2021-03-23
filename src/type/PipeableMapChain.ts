import { pipe } from "@app/example/overloads-pipe";
import { none, Option, some } from "@app/type/Option";

// type
export type PipeableMapChain = <A, B>(
  f: (a: A) => Option<B>
) => (self: Option<A>) => Option<B>;

export const pipeableMapChain: PipeableMapChain = (f) => {
  return (self) => {
    if (self._tag === "Some") {
      return f(self.value);
    }
    return none;
  };
};

pipe(
  some(1),
  pipeableMapChain((n) => some(2 * n))
);
