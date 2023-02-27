import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context, IContextProviderProps } from "../index";
import { Pagination } from "react-bootstrap";

export const Pages = observer(() => {
  const context = useContext<IContextProviderProps | null>(Context);
  const deviceStore = context?.device;
  const pageCount = Math.ceil(
    Number(deviceStore?.totalCount) / Number(deviceStore?.limit)
  );
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5 ">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={deviceStore?.page === page}
          activeLabel={''} 
          onClick={() => deviceStore?.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});
