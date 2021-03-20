import { Either, left, right } from "@app/type/Either";

// type
export type MapEither = <E, A, B>(
  self: Either<E, A>,
  f: (a: A) => B
) => Either<E, B>;

// type constructor
export const mapEither: MapEither = (self, f) => {
  if (self._tag === "Left") {
    return left(self.left);
  }
  return right(f(self.right));
};
