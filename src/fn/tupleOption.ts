import { AOfOption } from "@app/example/conditionalTypes";
import { none, Option, some } from "@type/Option";

export declare function tupleOption<ARGS extends Option<any>[]>(
  ...params: ARGS & { 0: Option<any> }
): Option<
  {
    [k in keyof ARGS]: AOfOption<ARGS[k]>;
  }
>;

const t = tupleOption(none, some(1));
