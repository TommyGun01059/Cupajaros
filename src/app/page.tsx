"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { useState } from "react";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="place-self-center flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-4xl">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Encuentra el</h1>
        <br />
        <h1 className={title({ color: "primary" })}>repositorio perfecto</h1>
        <br />
        <h1 className={title()}>para tus proyectos</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Repommender te garantiza encontrar
        </h2>
        <h2 className={subtitle({ class: "-mt-3" })}>
          los repositorios más populares de GitHub
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            className: "font-bold text-background",
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#popular-repos")?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest",
            });
          }}
        >
          Explorar repositorios populares
        </Link>
      </div>

      <div id="popular-repos">
        <div className="flex flex-col items-center gap-4 mt-32">
          <h2
            className={title({
              color: "primary",
              className: "text-center",
            })}
          >
            Repositorios populares
          </h2>

          <Divider />

          <Button variant="ghost" onPress={() => setClickCount(clickCount + 1)}>
            Mostrar más
          </Button>
        </div>
      </div>
    </section>
  );
}
