"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Image } from "@nextui-org/image";
import { useState } from "react";

import games from "@/gamesFiltered2.json";

const gamesArray = Object.values(games);

export function GameCard({ games }: { games: any }) {
  const [index, setIndex] = useState(0);
  const [game, setGame] = useState(games[index]);

  return (
    <Card className="w-full h-full max-w-2xl">
      <CardHeader className="w-full flex items-center justify-center text-center text-3xl font-thin tracking-tight">
        Selecciona {game.name}
      </CardHeader>
      <CardBody className="w-full flex items-center justify-center">
        <Image className="w-full" src={game.header_image} />
      </CardBody>
      <CardFooter className="w-full flex gap-2 items-center justify-between">
        <Button
          fullWidth
          onPress={() => {
            const i = index - 1;

            setIndex(i < 0 ? games.length - 1 : i);
            setGame(games[i]);
          }}
        >
          <ArrowLeft />
        </Button>
        <Button isIconOnly>
          <Heart />
        </Button>
        <Button
          fullWidth
          onPress={() => {
            const i = index + 1;

            setIndex(i % games.length);
            setGame(games[i]);
          }}
        >
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  return (
    <section className="w-full h-full place-self-center flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-4xl">
      <GameCard games={gamesArray} />
    </section>
  );
}
