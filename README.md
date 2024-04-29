# RXD CODE BASE - TS TEMPLATE

# Tech Stacks
**React:** [![ReactJS]](https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png)

**TailwindCSS:** [![TailwindCSS]](https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png)

**Vite:** [![Vite]](https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png)

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