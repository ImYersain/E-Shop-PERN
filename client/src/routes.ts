import Admin from './pages/Admin';
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE } from './utils/consts';
import BasketPage from './pages/BasketPage';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';
import { IRoute } from './types/routeTypes';


export const authRoutes:IRoute[] = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },

    {
        path: BASKET_ROUTE,
        component: BasketPage
    }
];


export const publicRoutes:IRoute[] = [
    {
        path: SHOP_ROUTE,
        component: Shop
    },

    {
        path: LOGIN_ROUTE,
        component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    
    {
        path: DEVICE_ROUTE + '/:id',
        component: DevicePage
    },
];