import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context, IContextProviderProps } from "../index";
import { ListGroup } from "react-bootstrap";
import { ITypeBrand } from "../store/DeviceStore";

export const TypeBar = observer(() => {
  const context = useContext<IContextProviderProps | null>(Context);
  const deviceStore = context?.device;

  return (
    <div>
      <ListGroup>
        {deviceStore?.types.map((type: ITypeBrand) => {
          return (
            <ListGroup.Item
              key={type.id}
              active={type.id === deviceStore.selectedType.id}
              onClick={() => deviceStore.setSelectedType(type)}
              style={{cursor:'pointer'}}
            >
              {type.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
});
