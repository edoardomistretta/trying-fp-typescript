import { Either } from "@app/type/Either";

// type
export type PipeableChainEither = <E, E0, A, B>(
  f: (a: A) => Either<E0, B>
) => (self: Either<E, A>) => Either<E | E0, B>;

// type constructor
export const pipeableChainEither: PipeableChainEither = <E, E0, A, B>(
  f: (a: A) => Either<E0, B>
) => (self: Either<E, A>) => {
  if (self._tag === "Left") {
    return self;
  }
  return f(self.right);
};
