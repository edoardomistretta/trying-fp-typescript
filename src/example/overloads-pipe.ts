export function pipe<T>(input: T): T;
export function pipe<T, T1>(input: T, f1: (t: T) => T1): T1;
export function pipe<T, T1, T2>(
  input: T,
  f1: (t: T) => T1,
  f2: (t: T1) => T2
): T2;
export function pipe<T, T1, T2, T3>(
  input: T,
  f1: (t: T) => T1,
  f2: (t: T1) => T2,
  f3: (t: T2) => T3
): T3;
export function pipe<T>(input: T, ...fns: ((_: any) => any)[]) {
  let result = input;
  for (let x = 0; x < fns.length; x++) {
    result = fns[x](result);
  }
  return result;
}

pipe(1);
pipe(1, (t1: number) => t1 + 1);
pipe(
  1,
  (t1: number) => t1 + 1,
  (t2: number) => t2 + 1
);
