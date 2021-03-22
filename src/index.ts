import { flow } from "@app/example/overloads-flow";
import { pipe } from "@app/example/overloads-pipe";
import {
  cae1,
  cae2,
  cae3,
  cae4,
  svu1,
  svu2,
  svu3,
  svu4,
  vuc1,
  vuc2,
  vuc3,
  vuc4,
} from "@app/example/validateUser";
import { Either } from "@app/type/Either";

const legacyPrintEitherResult = <E, A>(_: Either<E, A>) => {
  if (_._tag === "Left") {
    // eslint-disable-next-line no-console
    console.log(`left ${_.left}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`right ${JSON.stringify(_.right)}`);
  }
};
const l = (_: any) => {
  // eslint-disable-next-line no-console
  console.log(_);
};

legacyPrintEitherResult(svu1); // right
legacyPrintEitherResult(svu2); // left, InvalidUsername
legacyPrintEitherResult(svu3); // left, InvalidPassword
legacyPrintEitherResult(svu4); // left, InvalidUsername
legacyPrintEitherResult(vuc1); // right
legacyPrintEitherResult(vuc2); // left, InvalidUsername
legacyPrintEitherResult(vuc3); // left, InvalidPassword
legacyPrintEitherResult(vuc4); // left, InvalidUsername
legacyPrintEitherResult(cae1); // right
legacyPrintEitherResult(cae2); // left, left invalid username provided
legacyPrintEitherResult(cae3); // left, left invalid password provided
legacyPrintEitherResult(cae4); // left, left invalid username provided

l(pipe(1, (n) => n + 1));
l(
  pipe(
    1,
    (n) => n + 1,
    (n) => n + 1
  )
);
l(
  pipe(
    1,
    (n) => n + 1,
    (n) => n + 1,
    (n) => n + 1
  )
);
l(flow((n: number) => n + 1)(1));
l(
  flow(
    (n: number) => n + 1,
    (n) => n + 1
  )(1)
);
l(
  flow(
    (n: number) => n + 1,
    (n) => n + 1,
    (n) => n + 1
  )(1)
);
