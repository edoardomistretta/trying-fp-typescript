import { Either } from "@type/Either";
import { Option } from "@type/Option";
import { Reader } from "@type/Reader";

function add(x: number, y: number): number {
  return x + y;
}

type FirstParameter<A> = A extends (arg1: infer R, ...args: any) => any
  ? R
  : false;
type TypeOfFirstParameterAdd = FirstParameter<typeof add>;
type TypeName<A> = A extends string
  ? "string"
  : A extends number
  ? "number"
  : A extends boolean
  ? "boolean"
  : "other";

export type AOfOption<A> = [A] extends [Option<infer R>] ? R : never; // non-naked
type AOfOptionString = AOfOption<Option<string>>;
type AOfOptionNumber = AOfOption<Option<number>>;

type EOfEither<E> = E extends Either<infer E, any> ? E : never;
type AOfEither<A> = A extends Either<any, infer A> ? A : never;
type EOfLeft = EOfEither<Either<"error", "success">>;
type AOfRight = AOfEither<Either<"error", "success">>;

type ToArray<A> = A extends number ? A : never;
type NumArray = ToArray<number>;
type StrArray = ToArray<string>;
type DistributiveContionalTypes = ToArray<number | string>;

type AOfReader<A> = A extends Reader<infer _R, infer _B> ? true : false;
type AOfReaderString = AOfReader<Reader<{ foo: string }, "bar">>;
