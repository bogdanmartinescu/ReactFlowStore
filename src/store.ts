import { BehaviorSubject } from "rxjs";

interface Actions<T> {
  [key: string]: (context: { state: T }) => void;
}

interface Getters<T> {
  [key: string]: (context: { state: T }) => any;
}

interface StoreConfig<T> {
  state: T;
  actions?: Actions<T>;
  getters?: Getters<T>;
}

export class Store<T> {
  private state$: BehaviorSubject<T>;
  public actions: Actions<T> = {};
  public getters: { [key: string]: () => any } = {};

  constructor(config: StoreConfig<T>) {
    this.state$ = new BehaviorSubject<T>(config.state);

    if (config.actions) {
      for (const key in config.actions) {
        this.actions[key] = config.actions[key].bind(null, {
          state: this.state$.getValue(),
        });
      }
    }

    if (config.getters) {
      for (const key in config.getters) {
        this.getters[key] = () =>
          config.getters![key]({ state: this.state$.getValue() });
      }
    }
  }

  select<K extends keyof T>(key: K): T[K] {
    return this.state$.getValue()[key];
  }

  setState(newState: Partial<T>): void {
    this.state$.next({ ...this.state$.getValue(), ...newState });
  }

  subscribe(callback: (state: T) => void): () => void {
    return this.state$.subscribe(callback).unsubscribe;
  }
}

export function createStore<T>(config: StoreConfig<T>): Store<T> {
  return new Store<T>(config);
}
