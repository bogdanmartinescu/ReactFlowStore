import { createContext } from "react";
import { Store } from "./store";

type FlowStore<T = any> = Store<T> | null;

export const StoreContext = createContext<FlowStore>(null);
