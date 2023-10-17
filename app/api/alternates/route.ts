import alternatesJson from "../../../data/alternates.json";
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ data: alternatesJson });
};
