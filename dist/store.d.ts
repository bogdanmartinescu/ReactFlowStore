interface Actions<T> {
    [key: string]: (context: {
        state: T;
    }) => void;
}
interface Getters<T> {
    [key: string]: (context: {
        state: T;
    }) => any;
}
interface StoreConfig<T> {
    state: T;
    actions?: Actions<T>;
    getters?: Getters<T>;
}
export declare class Store<T> {
    private state$;
    actions: Actions<T>;
    getters: {
        [key: string]: () => any;
    };
    constructor(config: StoreConfig<T>);
    select<K extends keyof T>(key: K): T[K];
    setState(newState: Partial<T>): void;
    subscribe(callback: (state: T) => void): () => void;
}
export declare function createStore<T>(config: StoreConfig<T>): Store<T>;
export {};
