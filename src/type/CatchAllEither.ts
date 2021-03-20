import { Either } from "@app/type/Either";

// type
type CatchAllEither = <E, E1, A>(
  self: Either<E, A>,
  f: (a: E) => Either<E1, A>
) => Either<E1, A>;

// type constructor
export const catchAllEither: CatchAllEither = (self, f) => {
  if (self._tag === "Right") {
    return self;
  }
  return f(self.left);
};
