import { RouteObject } from "react-router-dom";
import Ads from "../pages/Ads";
import Home from "../pages/Home";

export const PublicRoutes: RouteObject[] = [
    {
        path:'',
        children: [
            {
                path: '',
                element:<Home />
            },
            {
                path: '/ads',
                element:<Ads/>
            }
        ]
    }
]