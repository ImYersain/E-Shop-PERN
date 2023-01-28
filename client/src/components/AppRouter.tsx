import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = ( ) => {
    const isAuth = false;

     return (
        <Routes> 
            {isAuth && authRoutes.map((route, index) => <Route path={route.path} element={<route.component />} />)}
            {publicRoutes.map((route, index) => <Route path={route.path} element={<route.component />} />)}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
} 


export default AppRouter;