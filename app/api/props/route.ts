import propsJson from "@/data/props.json";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async () => {
  return NextResponse.json({ data: propsJson });
};

export const PATCH = async (request: NextRequest) => {
  const { content } = await request.json();

  const dataFilePath = path.join(`${process.cwd()}`, "data", "props.json");
  const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

  const entryIndex = jsonData.findIndex(
    (entry: any) =>
      entry.playerName === content.playerName &&
      entry.statType === content.statType
  );

  if (entryIndex !== -1) {
    jsonData[entryIndex].marketSuspended = content.marketSuspended;

    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 4));

    return NextResponse.json({
      message: "marketSuspended updated successfully",
    });
  } else {
    return NextResponse.json({
      message: "entry not found",
    });
  }
};
