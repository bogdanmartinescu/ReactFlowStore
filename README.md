# ReactFlowStore

A lightweight state management library for React applications. Dive into a reactivity-rich environment powered by RxJS and experience a simpler, straightforward state management approach.

## Features

- Minimalist API
- Reactive updates with RxJS
- Convenient hooks for easy React integration
- Middleware and action creator support
- Memoization and caching for efficient data retrieval

## Installation

Install ReactFlowStore via npm:

```bash
npm install react-flow-store
```

## Usage

Create a store:

```typescript
// store.ts
import { createStore } from "react-flow-store";

const store = createStore({
  state: {
    users: [],
  },
  actions: {
    getUsers({ state }) {
      fetch("some-url")
        .then((res) => res.json())
        .then((users) => {
          state.users = users;
        });
    },
  },
  getters: {
    users({ state }) {
      return state.users;
    },
  },
});

export default store;
```

### Use the store in a React component:

```typescript
// UserComponent.tsx
import React from "react";
import { useStore } from "react-flow-store";
import store from "./store.ts";

const UserComponent: React.FC = () => {
  const users = useStore(store, "users");

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
```

### Wrap your app with StoreProvider:

```typescript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { StoreProvider } from "react-flow-store";

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
```

## Documentation

For more detailed documentation and additional examples, please refer to the official documentation (Link when available).

## Contributing

Pull requests are welcome. For significant changes, please open an issue first to discuss your proposals. Remember to run tests before submitting your PR!

## License

MIT
