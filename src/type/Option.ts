// type
export type None = {
  _tag: "None";
};
export type Some<A> = {
  _tag: "Some";
  value: A;
};
export type Option<A> = None | Some<A>;
export type AOfOption<A> = [A] extends [Option<infer X>] ? X : never;

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

export declare function tupleOption<ARGS extends Option<any>[]>(
  ...params: ARGS & { 0: Option<any> }
): Option<
  {
    [k in keyof ARGS]: AOfOption<ARGS[k]>;
  }
>;

const t = tupleOption(none, some(1));
