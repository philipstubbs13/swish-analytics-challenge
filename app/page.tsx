import Link from "next/link";
import { Button } from "../components/ui/button";
import { Routes } from "../constants/router.constants";

export default function HomePage() {
  return (
    <div
      className={
        "w-screen h-screen flex justify-center items-center container mx-auto"
      }
    >
      <div className={"w-full max-w-[600px]"}>
        <h1 className={"text-6xl mb-4"}>Beat the Odds</h1>
        <p className={"text-2xl mb-4"}>
          Betting on your favorite nba players just got a whole lot easier.
        </p>
        <div>
          <Link href={Routes.Data}>
            <Button className={"px-4 py-2 rounded-lg text-xl"}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
