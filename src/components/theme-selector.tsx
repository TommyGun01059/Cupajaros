"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { useIsSSR } from "@react-aria/ssr";

export const ThemeSelector = ({
  icon,
  themeName,
}: {
  icon: React.ReactElement;
  themeName: string;
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  if (isSSR) {
    return null;
  }

  return (
    <Button
      isIconOnly
      isDisabled={theme === themeName}
      onPress={() => setTheme(themeName)}
    >
      {icon}
    </Button>
  );
};
