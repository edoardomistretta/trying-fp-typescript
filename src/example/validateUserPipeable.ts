import { pipe } from "@fn/pipe";
import { Either, left, right } from "@type/Either";
import { pipeableChainEither } from "@type/PipeableChainEither";

type User = {
  username: string;
  password: string;
};
type InvalidUsername = "InvalidUsername";
type InvalidPassword = "InvalidPassword";
type ValidationError = InvalidUsername | InvalidPassword;

const validateUsername = (u: User): Either<ValidationError, User> =>
  u.username.length > 10 ? left("InvalidUsername") : right(u);
const validatePassword = (u: User): Either<ValidationError, User> =>
  u.password.length > 10 ? left("InvalidPassword") : right(u);

const user = { username: "edoardo", password: "123" } as User;

export const p = pipe(
  right(user),
  pipeableChainEither(validateUsername),
  pipeableChainEither(validatePassword)
);
