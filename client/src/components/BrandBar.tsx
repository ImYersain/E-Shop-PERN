import React from 'react'
import { observer } from 'mobx-react-lite';
import { IContextProviderProps, Context } from '../index';
import { useContext } from 'react';
import { Form, Card } from 'react-bootstrap';

export const BrandBar = observer(() => {
    const context = useContext<IContextProviderProps | null>(Context);
  const deviceStore = context?.device;

    return (
        <Form className="d-flex">
            {deviceStore?.brands.map(brand => {
                return (
                <Card 
                key={brand.id}
                className="p-3">
                    {brand.name}
                </Card>)
            })}
        </Form>
    )
})
