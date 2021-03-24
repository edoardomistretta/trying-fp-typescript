import { Either } from "@type/Either";

// type
export type CatchAllEither = <E, E1, A>(
  self: Either<E, A>,
  f: (a: E) => Either<E1, A>
) => Either<E1, A>;

// type constructor
export const catchAllEither: CatchAllEither = (self, f) => {
  if (self._tag === "Left") {
    return f(self.left);
  }
  return self;
};
