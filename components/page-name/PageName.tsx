import { PropsWithChildren } from "react";

export const PageName = (props: PropsWithChildren) => {
  return <h1 className={"text-6xl mb-4"}>{props.children}</h1>;
};
