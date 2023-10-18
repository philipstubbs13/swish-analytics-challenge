import { IColumn } from "../../components/data-table/columns";
import { headers } from "next/headers";
import { IPlayerPropsResponse } from "../../types/playerProps.types";
import {
  findLowAndHighLinesInAlternates,
  isMarketSuspended,
} from "../../lib/utils";
import { IPlayerAlternatesResponse } from "../../types/playerAlternates.types";

export const getData = async (): Promise<IColumn[]> => {
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
