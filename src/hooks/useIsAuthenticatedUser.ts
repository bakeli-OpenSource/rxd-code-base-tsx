// !GERER L'AUTORISATION D'ACCESS A VOTRE APPLICATION

import { useAuthContext } from "@/context/auth/AuthContext";

/**
 * Definit l'authentification
 * @return {true|false}
 */
function useIsAuthenticate() {
  const isAuthenticate = useAuthContext();

  return isAuthenticate;
}

export default useIsAuthenticate;
