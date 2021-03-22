import { Reader } from "@app/type/Reader";

export type MapReader = <R, A, B>(
  self: Reader<R, A>,
  f: (a: A) => B
) => Reader<R, B>;

export const mapReader: MapReader = <R, A, B>(
  self: Reader<R, A>,
  f: (a: A) => B
): Reader<R, B> => {
  return (r) => f(self(r));
};
