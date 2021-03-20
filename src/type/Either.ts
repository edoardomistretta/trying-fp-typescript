// types
export type Left<E> = {
  _tag: "Left";
  left: E;
};
export type Right<A> = {
  _tag: "Right";
  right: A;
};
export type Either<E, A> = Left<E> | Right<A>;

// types constructors
export const left = <E>(l: E): Either<E, never> => {
  return {
    _tag: "Left",
    left: l,
  };
};
export const right = <A>(r: A): Either<never, A> => {
  return {
    _tag: "Right",
    right: r,
  };
};
