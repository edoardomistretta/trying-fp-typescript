import {
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

legacyPrintEitherResult(svu1); // right
legacyPrintEitherResult(svu2); // left, InvalidUsername
legacyPrintEitherResult(svu3); // left, InvalidPassword
legacyPrintEitherResult(svu4); // left, InvalidUsername
legacyPrintEitherResult(vuc1); // right
legacyPrintEitherResult(vuc2); // left, InvalidUsername
legacyPrintEitherResult(vuc3); // left, InvalidPassword
legacyPrintEitherResult(vuc4); // left, InvalidUsername