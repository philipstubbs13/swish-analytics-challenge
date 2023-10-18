<div align="center">
  <h1>Beat the Odds</h1>
  
  <p>
    Beat the Odds is a web app that was created specifically to help the average basketball fan quickly and effectively visualize and organize complex market data for their favorite nba players and teams. With this app, I hope to make sports betting easy, fun, and enjoyable once again. If you have any ideas or suggestions on how to make that happen, let's chat.
  </p>
   
<h4>
    <a href="https://swish-analytics-challenge.vercel.app/data">View Wep App</a>
  <span> · </span>
    <a href="https://swish-analytics-challenge.vercel.app/api">API Documentation</a>
  <span> · </span> 
  <a href="https://swish-analytics-challenge.vercel.app/about">About</a>
  <span> · </span>
    <a href="https://github.com/philipstubbs13/swish-analytics-challenge/issues">Report Issue</a>
  <span> · </span>
    <a href="https://github.com/philipstubbs13/swish-analytics-challenge/issues">Request Feature</a>
  </h4>
</div>

<br />

# Table of Contents

- [About the Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [About the API](#api)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [Issues And Requests](#issues-and-requests)

## <a name="about-the-project"></a>About the Project

A web app that takes complex, technical market data (in json format) for nba players and transforms that data in a way so that the average basketball fan can visualize and understand.

There are 2 main datasets:

- **props** - this represents the optimal betting line being offered for each market, where a market is defined as the line for a specific stat type of a player. For example, for Russell Westbrook, his 4 unique markets and respective optimal lines are
  points (19.0), rebounds (9.0), assists (8.5), and steals (1.5).

- **alternates** - this represents all of the lines offered at one point for a market, and their respective under, over, and push probabilities. For example, for Russell Westbrook’s points market, there were 5 different lines - 18.5, 19.0,
  19.5, 20, and 20.5

### <a name="tech-stack"></a>Tech Stack

  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://react.dev/">React.js</a></li>
    <li><a href="https://ui.shadcn.com/">shadcn/ui</a></li>
    <li><a href="https://tanstack.com/table/v8">TanStack Table</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
  </ul>

### <a name="features"></a>Features

- Visualize player market data represented as a table. Each row of the table represents a market. For each market, included is the low and high lines for that market from the alternates dataset. For example, for Westbrook’s points, there are columnss for his low (18.5) and high (20.5).
- Filter data by position, stat type, and or market status (suspended or not).
- A search bar that filters on player name or team name.
- An indication of whether a market is suspended or not.

  A market is suspended if any of these 3 cases are true

  1. marketSuspended = 1 for that market in the props dataset.
  2. That market’s optimal line does not exist in the alternates dataset. For example, Jordan Poole points.
  3. That market exists in the alternates dataset, but none of the 3 probabilities for the optimal line are greater than 40%. For example, Steph Curry steals. His optimal line is 1, but the under, push, and over probs are each under .4

- Manually suspend or release.

### <a name="api"></a> About the API

The data for this project is available for use through an API built using Next.js. Using Next.js routes, this API extracts player market data from the json datasets and then transforms the data into a usable source so that it can be loaded into a table that gets rendered using React server components.

To see the data used for this project, take a look at the following endpoints:

- <https://swish-analytics-challenge.vercel.app/api/props>

- <https://swish-analytics-challenge.vercel.app/api/alternates>

## <a name="getting-started"></a>Getting Started

Clone the project.

```bash
  git clone https://github.com/philipstubbs13/swish-analytics-challenge.git
```

Go to the project directory.

```bash
  cd swish-analytics-challenge
```

Install dependencies.

```bash
  npm install
```

Start the development server.

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### <a name="deployment"></a>Deployment

This app is deployed through the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
Deploys are set up to happen automatically when code is merged into the `main` branch.

## <a name="contributing"></a>Contributing

Feedback and contributions are very much appreciated and always welcome!

## <a name="contact"></a>Contact

Phil Stubbs - philipstubbs13@gmail.com

Project Link: [https://swish-analytics-challenge.vercel.app/beat-the-odds](https://swish-analytics-challenge.vercel.app/beat-the-odds)

## <a name="issues-and-requests"></a>Issues and Requests

If you find an issue while using the application or have a request, log the issue or request [here](https://github.com/philipstubbs13/swish-analytics-challenge/issues). These will be addressed in a future code update.
