"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { X, Check, ShoppingBasket, InfoIcon } from "lucide-react";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import games from "@/gamesFiltered2.json";

const gamesArray = Object.values(games);

export function GameCard({ games }: { games: any }) {
  const [index, setIndex] = useState(0);
  const [game, setGame] = useState(games[index]);
  const [bought, setBuy] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <Card className="w-fit h-fit max-w-2xl">
      <CardHeader className="py-0 pt-2 w-full flex items-center justify-center text-center text-3xl font-light">
        {game.name}
      </CardHeader>
      <CardBody className="w-full h-fit flex items-center justify-center">
        <Image
          className="w-full h-fit"
          classNames={{
            wrapper: "w-full h-fit rounded-0",
          }}
          src={game.header_image}
        />
      </CardBody>
      <CardFooter className="w-full flex gap-2 items-center justify-between">
        <Button
          fullWidth
          onPress={() => {
            const i = index - 1;

            setIndex(i < 0 ? games.length - 1 : i);
            setGame(games[i]);
            setBuy(false);
          }}
        >
          <X />
        </Button>
        <Button isIconOnly onPress={() => setBuy(!bought)}>
          <motion.div
            className="w-full h-full flex items-center justify-center"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 1.5,
              y: 2.5,
            }}
          >
            <ShoppingBasket
              className={clsx(
                bought
                  ? "fill-cyan-400 stroke-cyan-400"
                  : "fill-none stroke-foreground"
              )}
            />
          </motion.div>
        </Button>
        <Button isIconOnly onPress={() => setInfo(!info)}>
          <motion.div
            className="w-full h-full flex items-center justify-center right-0"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 1.5,
              y: 2.5,
            }}
          >
            <InfoIcon
              className={clsx(
                info ? "fill-cyan-400" : "fill-none stroke-foreground"
              )}
            />
          </motion.div>
        </Button>
        <Button
          fullWidth
          onPress={() => {
            const i = index + 1;

            setIndex(i % games.length);
            setGame(games[i]);
            setLiked(false);
          }}
        >
          <Check />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  return (
    <section className="w-full h-full place-self-center flex flex-col items-center justify-center gap-4 max-w-4xl">
      <GameCard games={gamesArray} />
    </section>
  );
}
