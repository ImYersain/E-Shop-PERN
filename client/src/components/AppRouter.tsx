import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from './../index';
import UserStore from './../store/UserStore';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(( ) => {
    const {user}:any = useContext(Context);

     return (
        <Routes> 
            {user.isAuth && authRoutes.map((route, index) => <Route key={index} path={route.path} element={<route.component />} />)}
            {publicRoutes.map((route, index) => <Route key={index} path={route.path} element={<route.component />} />)}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
});


export default AppRouter;