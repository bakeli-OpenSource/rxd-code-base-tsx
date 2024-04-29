import { MdDashboard } from "react-icons/md";

import { ACCEUIL_PATH, PRODUCTS_PATH } from "./navigationPaths";
import { IconType } from "react-icons";
import { To } from "react-router-dom";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export type SidebarLinksProps = { path: To; label: string; icon: IconType };

export const links: SidebarLinksProps[] = [
  { path: ACCEUIL_PATH, icon: MdDashboard, label: "Acceuil" },
  { path: PRODUCTS_PATH, icon: MdDashboard, label: "Products" },
];
