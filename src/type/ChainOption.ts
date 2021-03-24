import { Option } from "@type/Option";

// type
export type ChainOption = <A, B>(
  self: Option<A>,
  f: (a: A) => Option<B>
) => Option<B>;

// type constructor
export const chainOption: ChainOption = (self, f) => {
  if (self._tag === "None") {
    return self;
  }
  return f(self.value);
};
