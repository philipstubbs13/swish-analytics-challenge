import { columns, IColumn } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { headers } from "next/headers";
import { IPlayerPropsResponse } from "@/types/playerProps.types";
import {
  findLowAndHighLinesInAlternates,
  isMarketSuspended,
} from "@/lib/utils";
import { IPlayerAlternatesResponse } from "@/types/playerAlternates.types";

const getData = async (): Promise<IColumn[]> => {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  const urls = [
    `${protocal}://${host}/api/props`,
    `${protocal}://${host}/api/alternates`,
  ];

  const [propsResponse, alternatesResponse] = await Promise.all(
    urls.map((url) => fetch(url))
  );

  if (!propsResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const playerPropsResponse: IPlayerPropsResponse = await propsResponse.json();
  const playerAlternatesResponse: IPlayerAlternatesResponse =
    await alternatesResponse.json();
  const propsData = playerPropsResponse.data;
  const alternatesData = playerAlternatesResponse.data;

  const tableData = propsData.map((prop) => {
    const highLowLines = findLowAndHighLinesInAlternates(prop, alternatesData);

    return {
      high: highLowLines.high,
      id: prop.playerId,
      isMarketSuspended: isMarketSuspended(prop, alternatesData) ? "Yes" : "No",
      line: prop.line,
      low: highLowLines.low,
      playerName: prop.playerName,
      position: prop.position,
      statType: prop.statType,
      team: `${prop.teamNickname} (${prop.teamAbbr})`,
    };
  });

  return tableData;
};

export default async function BeatTheOddsPage() {
  const data = await getData();

  return (
    <div className={"container mx-auto py-10"}>
      <h1 className={"text-6xl mb-4"}>Beat the Odds</h1>
      <p className={"text-2xl mb-8"}>
        Betting on your favorite nba players just got a whole lot easier.
      </p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
