export type SiteConfig = typeof siteConfig;

// TODO: Update config
export const siteConfig = {
  name: "Recomendador de videojuegos",
  description: "Recomendador de videojuegos",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Lista de deseados",
      href: "/wishlist",
    },
    {
      label: "Lista de no deseados",
      href: "/blacklist",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Lista de deseados",
      href: "/wishlist",
    },
    {
      label: "Lista de no deseados",
      href: "/blacklist",
    },
  ],
  links: {
    github: "https://github.com/",
  },
};
