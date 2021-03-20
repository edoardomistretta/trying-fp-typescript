// type
export type None = {
  _tag: "None";
};
export type Some<A> = {
  _tag: "Some";
  value: A;
};
export type Option<A> = None | Some<A>;

// types constructors
export const none: Option<never> = {
  _tag: "None",
};
export const some = <A>(value: A): Option<A> => {
  return {
    _tag: "Some",
    value,
  };
};
