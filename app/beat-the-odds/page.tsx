import { columns, IColumn } from "./columns";
import { DataTable } from "../../components/data-table/DataTable";
import { headers } from "next/headers";
import { IPlayerPropsResponse } from "@/types/playerProps.types";
import { statTypeLabels } from "@/constants/playerProps.constants";
import { isMarketSuspended } from "@/lib/utils";
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
  const props = playerPropsResponse.data;
  const alternates = playerAlternatesResponse.data;

  const tableData = props.map((prop) => ({
    id: prop.playerId,
    isMarketSuspended: isMarketSuspended(prop, alternates) ? "Yes" : "No",
    line: prop.line,
    playerName: prop.playerName,
    position: prop.position,
    statType: statTypeLabels[prop.statType],
    team: `${prop.teamNickname} (${prop.teamAbbr})`,
  }));

  return tableData;
};

export default async function BeatTheOdds() {
  const data = await getData();

  return (
    <div className={"container mx-auto py-10"}>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
