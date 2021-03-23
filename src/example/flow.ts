import { flow } from "@app/example/overloads-flow";

flow((n: number) => n + 1)(1);
flow(
  (n: number) => n + 1,
  (n) => n + 1
)(1);
flow(
  (n: number) => n + 1,
  (n) => n + 1,
  (n) => n + 1
)(1);
