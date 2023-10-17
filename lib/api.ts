import { StatType } from "@/constants/playerProps.constants";

export const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updateMarketStatus = async (content: {
  marketSuspended: number;
  statType: StatType;
  playerName: string;
}) => {
  const res = await fetch(
    new Request(createURL("/api/props"), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
