import { useState, useEffect, useContext } from "react";
import { Store } from "../store";
import { StoreContext } from "../storeContext";

export function useStore<T, K extends keyof T>(key: K): T[K] {
  const store = useContext(StoreContext) as Store<T>;
  if (!store) throw new Error("useStore must be used within a StoreProvider");

  const [state, setState] = useState(store.select(key));

  useEffect(() => {
    const unsubscribe = store.subscribe((updatedState) => {
      setState(updatedState[key]);
    });

    return () => {
      unsubscribe();
    };
  }, [store, key]);

  return state;
}
