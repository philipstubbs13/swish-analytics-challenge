import propsJson from "@/data/props.json";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ data: propsJson });
};
