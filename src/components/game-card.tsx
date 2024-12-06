import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { motion } from "framer-motion";
import { X, ShoppingBasket, InfoIcon, Check } from "lucide-react";
import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { Game } from "@/types";

export function GameCard({ games }: { games: Game[] }) {
  const [index, setIndex] = useState(0);
  const [game, setGame] = useState(games[index]);
  const [bought, setBuy] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [liked, setLiked] = useState(false);

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
            const i = index + 1;

            setIndex(i % games.length);
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
                bought ? "stroke-cyan-400" : "fill-none stroke-foreground"
              )}
            />
          </motion.div>
        </Button>
        <Button
          isExternal
          isIconOnly
          as={Link}
          href={game.infoPage || "/game-not-found"}
          startContent={<InfoIcon />}
        />
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
