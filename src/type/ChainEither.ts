import { Either, left } from "@app/type/Either";

// type
export type ChainEither = <E, E0, A, B>(
  self: Either<E, A>,
  f: (a: A) => Either<E0, B>
) => Either<E | E0, B>;

// type constructor
export const chainEither: ChainEither = (self, f) => {
  if (self._tag === "Left") {
    return left(self.left);
  }
  return f(self.right);
};
