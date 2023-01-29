import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from './../index';
import UserStore from './../store/UserStore';

const AppRouter = ( ) => {
    const {user}:any = useContext(Context);
    console.log(user);

     return (
        <Routes> 
            {user.isAuth && authRoutes.map((route, index) => <Route path={route.path} element={<route.component />} />)}
            {publicRoutes.map((route, index) => <Route path={route.path} element={<route.component />} />)}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
} 


export default AppRouter;