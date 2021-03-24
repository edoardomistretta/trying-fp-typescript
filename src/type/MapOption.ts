import { none, Option, some } from "@type/Option";

// type
export type MapOption = <A, B>(self: Option<A>, f: (a: A) => B) => Option<B>;

// type constructor
export const mapOption: MapOption = (self, f) => {
  if (self._tag === "Some") {
    return some(f(self.value));
  }
  return none;
};
