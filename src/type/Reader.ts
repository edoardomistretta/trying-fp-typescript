// type
export type Reader<R, A> = (r: R) => A;

// type constructor
export const access = <R, A>(f: (r: R) => A): Reader<R, A> => {
  return f;
};
