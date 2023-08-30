import { createStore } from "../store";

describe("Store", () => {
  it("should initialize with the given state", () => {
    const initialState = { count: 0 };
    const store = createStore({ state: initialState });
    expect(store.select("count")).toBe(0);
  });

  it("should update the state", () => {
    const initialState = { count: 0 };
    const store = createStore({ state: initialState });
    store.setState({ count: 1 });
    expect(store.select("count")).toBe(1);
  });

  it("should compute values using getters", () => {
    const initialState = { count: 2 };
    const store = createStore({
      state: initialState,
      getters: {
        double: ({ state }) => state.count * 2,
      },
    });
    expect(store.getters.double()).toBe(4);
  });
});
