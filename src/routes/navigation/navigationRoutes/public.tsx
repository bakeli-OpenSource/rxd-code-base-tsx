import { PUBLIC_PATH } from "../navigationPaths";
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';
import WithoutAuth from "../../../layout/WithoutAuth";

/*
|---------------------------------------------------------------
| Les routes publics
|---------------------------------------------------------------
| Toute page qui ne necessite pas une authentification doit etre ici
|
*/
export const publicRoutes = [
    {
        path: PUBLIC_PATH,
        errorElement: <ErrorBoundary />,
        element: <WithoutAuth />,
        children: [
            {
                path: "",
                element: <p>Hello</p>
            },
        ]
    },
];