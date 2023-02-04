import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context, IContextProviderProps } from '../index';
import { Form } from 'react-router-dom';
import { DeviceItem } from './DeviceItem';
import { Row } from 'react-bootstrap';

export const DeviceList = observer(() => {
    const context = useContext<IContextProviderProps | null>(Context);
    const deviceStore = context?.device

    return (
        <Row className={"d-flex"}>
            {deviceStore?.devices.map(device => <DeviceItem key={device.id} device={device} />)}
        </Row>
    )
})
