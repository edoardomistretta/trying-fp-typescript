type ToNumber<T> = (_: T) => number;
type Calculator<T> = {
  add: (_: ToNumber<T>) => (x: T, y: T) => T;
};
const c1: Calculator<string> = {
  add: (f) => (x, y) => {
    return `result: ${f(x) + f(y)}`;
  },
};
c1.add((_) => _.length)("a", "b");

const c2: Calculator<number> = {
  add: (f) => (x, y) => {
    return f(x) + f(y);
  },
};
c2.add((_) => _)(1, 5);
