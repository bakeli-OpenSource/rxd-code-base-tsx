import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";
import AppShell from "../../../layout/AppShell/AppShell";
import RequireAuth from "../../../layout/RequireAuth";
import { ACCEUIL_PATH } from "../navigationPaths";


/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
    {
        path: ACCEUIL_PATH,
        errorElement: <ErrorBoundary />,
        element: <RequireAuth />,
        children: [
            {
                path: "",
                element: <AppShell />,
                children: [
                    {
                        path: "",
                        element: <h1>Wecolme</h1>
                    }
                ]
            }
        ]
    },
];