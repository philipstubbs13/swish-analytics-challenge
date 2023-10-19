import { PageName } from "../../components/page-name/PageName";
import { Container } from "../../components/container/Container";
import { columns } from "../../components/data-table/columns";
import { DataTable } from "../../components/data-table/DataTable";
import { getData } from "./page.utils";

export default async function DataPage() {
  const data = await getData();

  return (
    <Container>
      <PageName>Beat the Odds</PageName>
      <p className={"text-2xl mb-8"}>
        Betting on your favorite nba players just got a whole lot easier.
      </p>
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
