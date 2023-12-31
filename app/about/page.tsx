import { PageName } from "../../components/page-name/PageName";
import { Container } from "../../components/container/Container";

export default function AboutPage() {
  return (
    <Container>
      <PageName>About</PageName>
      <p className="mb-4">
        Beat the Odds is a web app that was created specifically to help the
        average basketball fan quickly and effectively visualize and organize
        complex market data for their favorite nba players and teams. With this
        app, I hope to make sports betting easy, fun, and enjoyable once again.
        If you have any ideas or suggestions on how to make that happen,
        let&apos;s chat.
      </p>
      <p className="mb-4">
        A web app that takes complex, technical market data (in json format) for
        nba players and transforms that data in a way so that the average
        basketball fan can visualize and understand.
      </p>
    </Container>
  );
}
