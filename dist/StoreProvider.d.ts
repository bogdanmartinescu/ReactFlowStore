import { FC, ReactNode } from "react";
import { Store } from "./store";
interface StoreProviderProps<T> {
    store: Store<T>;
    children: ReactNode;
}
export declare const ReactFlowStoreProvider: FC<StoreProviderProps<any>>;
export {};
