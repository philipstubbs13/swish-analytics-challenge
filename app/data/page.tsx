import { columns } from "../../components/data-table/columns";
import { DataTable } from "../../components/data-table/DataTable";
import { getData } from "./page.utils";

export default async function DataPage() {
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
