import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CreateBrand } from './../components/modals/CreateBrand';
import { CreateType } from '../components/modals/CreateType';
import { CreateDevice } from '../components/modals/CreateDevice';
import {useContext} from 'react';
import { Context, IContextProviderProps } from '../index';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

 const Admin = ( ) => {
    const [brandVisible, setBrandVisible] = useState<boolean>(false);
    const [typeVisible, setTypeVisible] = useState<boolean>(false);
    const [deviceVisible, setDeviceVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    const context = useContext<IContextProviderProps | null>(Context);
    const userStore = context?.user;

    if (!userStore?.isAuth) navigate(SHOP_ROUTE);
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} onClick={() => setTypeVisible(true)} className='mt-4 p-2'>Add type</Button>
            <Button variant={'outline-dark'} onClick={() => setBrandVisible(true)} className='mt-4 p-2'>Add brand</Button>
            <Button variant={'outline-dark'} onClick={() => setDeviceVisible(true)} className='mt-4 p-2'>Add device</Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    )
} 


export default Admin;