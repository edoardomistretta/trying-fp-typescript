import { Either } from "@type/Either";

// type
export type PipeableCatchAllEither = <E, E1, A>(
  f: (a: E) => Either<E1, A>
) => (self: Either<E, A>) => Either<E1, A>;

// type constructor
export const pipeableCatchAllEither: PipeableCatchAllEither = <E, E1, A>(
  f: (a: E) => Either<E1, A>
) => {
  return (self: Either<E, A>) => {
    if (self._tag === "Left") {
      return f(self.left);
    }
    return self;
  };
};
