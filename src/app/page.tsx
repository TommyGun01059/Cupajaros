"use client";

import { GameCard } from "@/components/game-card";
import games from "@/gamesFiltered3.json";
import { Game } from "@/types";

const gamesArray = Object.values(games) as Game[];

export default function Home() {
  return (
    <section className="w-full h-full place-self-center flex flex-col items-center justify-center gap-4 max-w-4xl">
      <GameCard games={gamesArray} />
    </section>
  );
}
