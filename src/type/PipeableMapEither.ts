import { Either, right } from "@type/Either";

// type
export type PipeableMapEither = <A, B>(
  f: (a: A) => B
) => <E>(self: Either<E, A>) => Either<E, B>;

// type constructor
export const pipeableMapEither: PipeableMapEither = (f) => {
  return (self) => {
    if (self._tag === "Left") {
      return self;
    }
    return right(f(self.right));
  };
};
