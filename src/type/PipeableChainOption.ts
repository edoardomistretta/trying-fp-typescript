import { none, Option } from "@app/type/Option";

// type
export type PipeableChainOption = <A, B>(
  f: (a: A) => Option<B>
) => (self: Option<A>) => Option<B>;

export const pipeableChainOption: PipeableChainOption = (f) => {
  return (self) => {
    if (self._tag === "Some") {
      return f(self.value);
    }
    return none;
  };
};
