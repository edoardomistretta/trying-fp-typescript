import { Either, right } from "@app/type/Either";

// type
export type PipeableMapEither = <E, A, B>(
  f: (a: A) => B
) => (self: Either<E, A>) => Either<E, B>;

// type constructor
export const pipeableMapEither: PipeableMapEither = (f) => {
  return (self) => {
    if (self._tag === "Left") {
      return self;
    }
    return right(f(self.right));
  };
};
