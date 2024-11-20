"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

import { LookingForIcon } from "@/components/icons/ui";

export default function Page() {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-evenly px-8">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <LookingForIcon className="fill-warning" size={128} />
      </motion.div>
      <h2 className="text-center text-2xl font-semibold">
        No hemos podido encontrar la página que estás buscando.
      </h2>
      <Button variant="ghost" onClick={() => window.history.back()}>
        Volver a la página anterior
      </Button>
    </div>
  );
}
