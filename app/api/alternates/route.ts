import alternatesJson from "@/data/alternates.json";
import { NextResponse } from "next/server";
import { IPlayerAlternatesResponse } from "@/types/playerAlternates.types";

export const GET = async () => {
  return NextResponse<IPlayerAlternatesResponse>.json({ data: alternatesJson });
};
