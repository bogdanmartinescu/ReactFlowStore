/// <reference types="react" />
import { Store } from "./store";
type FlowStore<T = any> = Store<T> | null;
export declare const StoreContext: import("react").Context<FlowStore<any>>;
export {};
