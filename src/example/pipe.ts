import { pipe } from "@app/example/overloads-pipe";

pipe(1, (n) => n + 1);
pipe(
  1,
  (n) => n + 1,
  (n) => n + 1
);
pipe(
  1,
  (n) => n + 1,
  (n) => n + 1,
  (n) => n + 1
);
