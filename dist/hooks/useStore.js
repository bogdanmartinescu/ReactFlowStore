"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = void 0;
const react_1 = require("react");
const storeContext_1 = require("../storeContext");
function useStore(key) {
    const store = (0, react_1.useContext)(storeContext_1.StoreContext);
    if (!store)
        throw new Error("useStore must be used within a StoreProvider");
    const [state, setState] = (0, react_1.useState)(store.select(key));
    (0, react_1.useEffect)(() => {
        const unsubscribe = store.subscribe((updatedState) => {
            setState(updatedState[key]);
        });
        return () => {
            unsubscribe();
        };
    }, [store, key]);
    return state;
}
exports.useStore = useStore;
