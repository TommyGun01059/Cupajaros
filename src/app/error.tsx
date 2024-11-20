"use client";

import { useEffect } from "react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

import { BrokenChainIcon } from "@/components/icons/ui";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

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
        <BrokenChainIcon className="fill-danger" size={128} />
      </motion.div>
      <h2 className="text-center text-2xl font-semibold">
        Algo se ha roto internamente. ¡Lo sentimos!
      </h2>
      <Button
        variant="ghost"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentarlo de nuevo
      </Button>
    </div>
  );
}
