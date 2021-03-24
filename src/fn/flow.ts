export function flow<T, T1>(f1: (v: T) => T1): (t: T) => T1;
export function flow<T, T1, T2>(
  f1: (v: T) => T1,
  f2: (v: T1) => T2
): (t: T) => T2;
export function flow<T, T1, T2, T3>(
  f1: (v: T) => T1,
  f2: (t1: T1) => T2,
  f3: (t2: T2) => T3
): (t: T) => T3;

export function flow<T>(...fns: ((_: T) => T)[]) {
  return (input: any) => {
    let result = input;
    for (let x = 0; x < fns.length; x++) {
      result = fns[x](result);
    }
    return result;
  };
}
