import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { ReactFlowStoreProvider, createStore, useStore } from "../index";

type State = {
  testValue: string;
};

describe("useStore", () => {
  it("should retrieve state from the store", async () => {
    const testStore = createStore<State>({
      state: { testValue: "Hello" },
    });

    const TestComponent: React.FC = () => {
      const testValue = useStore<State, keyof State>("testValue");
      return <div>{testValue}</div>;
    };

    const { getByText } = render(
      <ReactFlowStoreProvider store={testStore}>
        <TestComponent />
      </ReactFlowStoreProvider>
    );
    await waitFor(() => {
      expect(getByText("Hello")).toHaveLength(1);
    });
  });

  // ... you can continue to add more tests for other functionalities or edge cases.
});
