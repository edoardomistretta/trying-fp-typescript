import { AOfOption } from "@app/example/conditionalTypes";
import { Option, some } from "@type/Option";

export function tupleOption<ARGS extends readonly Option<any>[]>(
  ...params: ARGS & { readonly 0: Option<any> }
): Option<
  Readonly<
    {
      [k in keyof ARGS]: AOfOption<ARGS[k]>;
    }
  >
>;
export function tupleOption(...params: readonly Option<any>[]): Option<any> {
  const res: any[] = [];
  for (const o of params) {
    if (o._tag === "None") {
      return o;
    }
    res.push(o.value);
  }
  return some(res);
}
