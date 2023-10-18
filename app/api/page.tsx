export default function ApiDocumentationPage() {
  return (
    <div className={"container mx-auto py-10"}>
      <h1 className={"text-6xl mb-4"}>About the API</h1>
      <p className="mb-4">
        The data for this project is available for use through an API built
        using Next.js API routes. This API extracts player market data (in json
        format) and then transforms the data into a usable source so that it can
        be loaded into a table for display.
      </p>
      <div className="mb-4">
        <h2 className="text-3xl">Resource URL</h2>
        <code>https://swish-analytics-challenge.vercel.app/api/</code>
      </div>
      <div className="mb-4">
        <h2 className="text-3xl">Response Format</h2>
        <p>JSON</p>
      </div>
      <div className="mb-4">
        <h2 className="text-3xl mb-4">Endpoints</h2>
        <ul>
          <li className="mb-4">
            <b>https://swish-analytics-challenge.vercel.app/api/props</b> - this
            represents the optimal betting line being offered for each market,
            where a market is defined as the line for a specific stat type of a
            player. For example, for Russell Westbrook, his 4 unique markets and
            respective optimal lines are points (19.0), rebounds (9.0), assists
            (8.5), and steals (1.5).
          </li>
          <li>
            <b>https://swish-analytics-challenge.vercel.app/api/alternates</b> -
            this represents all of the lines offered at one point for a market,
            and their respective under, over, and push probabilities. For
            example, for Russell Westbrook’s points market, there were 5
            different lines - 18.5, 19.0, 19.5, 20, and 20.5.
          </li>
        </ul>
      </div>
    </div>
  );
}
