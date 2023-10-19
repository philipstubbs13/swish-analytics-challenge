import { PropsWithChildren } from "react";

export const Container = (props: PropsWithChildren) => {
  return <div className={"container mx-auto py-10"}>{props.children}</div>;
};
