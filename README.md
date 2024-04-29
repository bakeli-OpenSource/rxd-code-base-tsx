# RXD CODE BASE - TS TEMPLATE

# Tech Stacks
**React:** [![Tech Stack](https://skills.thijs.gg/icons?i=react)](https://skills.thijs.gg)
**TailwindCSS:** [![Tech Stack](https://skills.thijs.gg/icons?i=tailwind)](https://skills.thijs.gg)
**Vite:** [![Tech Stack](https://skills.thijs.gg/icons?i=vite)](https://skills.thijs.gg)

### Node version

> Node ^21

## Structure des dossiers :file_folder:
- components
- contexts
- hooks
- layout
  - AppShell
  - Header
  - Sidebar
  - RequireAuth.tsx
  - WithoutAuth.tsx
- pages
- routes
  - api
  - navigation
    - navigationRoutes
      - private.tsx
      - public.tsx
    - navigationPaths.ts
    - sidebarLinks.ts
  - Routes.tsx
- App.tsx

### Explication des differents dossiers et leurs contenus
- *layout* :open_file_folder: : Ici vous trouverez tout ce qui concerne la mise en page:
  - Sidebar :open_file_folder:
  - Header :open_file_folder:
  - RequireAuth.tsx: Gestion des pages privees
  - WithoutAuth.tsx: Gestion des pages public

- *routes* :open_file_folder:  : Ce dossier contient les routes de navigations. 
Elles sont de type publics et privees. Il contient en meme temps les `PATHS` ou `URL` des pages.
***Tout ce qui concerne la navigation sur l'application sera ici***.