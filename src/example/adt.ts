// define sets (or types)
type Sum = {
  _tag: "Sum";
  x: Expression;
  y: Expression;
};
type Mul = {
  _tag: "Mul";
  x: Expression;
  y: Expression;
};
type Value = {
  _tag: "Value";
  n: number;
};
type Expression = Sum | Mul | Value;

// define sets' constructors
function sum(x: Expression, y: Expression): Expression {
  return {
    _tag: "Sum",
    x,
    y,
  };
}
function mul(x: Expression, y: Expression): Expression {
  return {
    _tag: "Mul",
    x,
    y,
  };
}
function value(n: number): Expression {
  return {
    _tag: "Value",
    n,
  };
}

// algebra
const compute = (ex: Expression): number => {
  switch (ex._tag) {
    case "Sum":
      return compute(ex.x) + compute(ex.y);
    case "Mul":
      return compute(ex.x) * compute(ex.y);
    case "Value":
      return ex.n;
  }
};

compute(sum(value(1), mul(value(2), value(3))));
