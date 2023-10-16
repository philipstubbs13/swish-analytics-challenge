import propsJson from "@/data/props.json";
import { NextResponse } from "next/server";
import { IPlayerPropsResponse } from "@/types/playerProps.types";

export const GET = async () => {
  return NextResponse<IPlayerPropsResponse>.json({ data: propsJson });
};
