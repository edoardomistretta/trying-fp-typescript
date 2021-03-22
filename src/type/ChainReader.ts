import { Reader } from "@app/type/Reader";

export type ChainReader = <R, A, B>(
  self: Reader<R, A>,
  f: (a: A) => Reader<R, B>
) => Reader<R, B>;

export const chainReader: ChainReader = <R, A, B>(
  self: Reader<R, A>,
  f: (a: A) => Reader<R, B>
): Reader<R, B> => {
  return (r) => f(self(r))(r);
};

export const chainReader2: ChainReader = <R, R0, A, B>(
  self: Reader<R, A>,
  f: (a: A) => Reader<R0, B>
): Reader<R & R0, B> => {
  return (r) => f(self(r))(r);
};
