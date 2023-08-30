import React, { FC, ReactNode } from "react";
import { Store } from "./store";
import { StoreContext } from "./storeContext";

interface StoreProviderProps<T> {
  store: Store<T>;
  children: ReactNode;
}

export const ReactFlowStoreProvider: FC<StoreProviderProps<any>> = ({
  store,
  children,
}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
