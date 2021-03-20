import { chainEither } from "@app/type/ChainEither";
import { Either, left, right } from "@app/type/Either";

type User = {
  username: string;
  password: string;
};
type InvalidUsername = "InvalidUsername";
type InvalidPassword = "InvalidPassword";
type ValidationError = InvalidUsername | InvalidPassword;

export const simpleValidateUser = (
  user: User
): Either<ValidationError, User> => {
  if (user.username.length > 10) {
    return left("InvalidUsername");
  }
  if (user.password.length > 10) {
    return left("InvalidPassword");
  }
  return right(user);
};

export const validateUserChain = (
  user: User
): Either<ValidationError, User> => {
  const validateUsername = (u: User): Either<ValidationError, User> =>
    u.username.length > 10 ? left("InvalidUsername") : right(u);
  const validatePassword = (u: User): Either<ValidationError, User> =>
    u.password.length > 10 ? left("InvalidPassword") : right(u);
  const usernameValidated = chainEither(right(user), validateUsername);
  return chainEither(usernameValidated, validatePassword);
};

export const svu1 = simpleValidateUser({
  username: "user",
  password: "pwd",
});
export const svu2 = simpleValidateUser({
  username: "useruseruser",
  password: "pwd",
});
export const svu3 = simpleValidateUser({
  username: "user",
  password: "pwdpwdpwdpwd",
});
export const svu4 = simpleValidateUser({
  username: "useruseruser",
  password: "pwdpwdpwdpwd",
});

export const vuc1 = validateUserChain({
  username: "user",
  password: "pwd",
});
export const vuc2 = validateUserChain({
  username: "useruseruser",
  password: "pwd",
});
export const vuc3 = validateUserChain({
  username: "user",
  password: "pwdpwdpwdpwd",
});
export const vuc4 = validateUserChain({
  username: "useruseruser",
  password: "pwdpwdpwdpwd",
});
