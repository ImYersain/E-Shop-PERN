import React from "react";
import { observer } from "mobx-react-lite";
import { IContextProviderProps, Context } from "../index";
import { useContext } from "react";
import { Form, Card } from "react-bootstrap";
import { ITypeBrand } from '../store/DeviceStore';

export const BrandBar = observer(() => {
  const context = useContext<IContextProviderProps | null>(Context);
  const deviceStore = context?.device;

  const selectBrandHandler = (brand: ITypeBrand) => {
    if (brand.id === deviceStore?.selectedBrand.id) {
      deviceStore?.setSelectedBrand({});
    } else {
      deviceStore?.setSelectedBrand(brand);
      deviceStore?.setPage(1);
    }
  }

  return (
    <Form className="d-flex">
      {deviceStore?.brands.map((brand) => {
        return (
          <Card
            key={brand.id}
            className="p-3"
            style={{cursor: 'pointer'}}
            onClick={() => selectBrandHandler(brand)}
            border={brand.id === deviceStore.selectedBrand.id? 'danger': 'light'}
          >
            {brand.name}
          </Card>
        );
      })}
    </Form>
  );
});
