"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = exports.Store = void 0;
const rxjs_1 = require("rxjs");
class Store {
    constructor(config) {
        this.actions = {};
        this.getters = {};
        this.state$ = new rxjs_1.BehaviorSubject(config.state);
        if (config.actions) {
            for (const key in config.actions) {
                this.actions[key] = config.actions[key].bind(null, {
                    state: this.state$.getValue(),
                });
            }
        }
        if (config.getters) {
            for (const key in config.getters) {
                this.getters[key] = () => config.getters[key]({ state: this.state$.getValue() });
            }
        }
    }
    select(key) {
        return this.state$.getValue()[key];
    }
    setState(newState) {
        this.state$.next(Object.assign(Object.assign({}, this.state$.getValue()), newState));
    }
    subscribe(callback) {
        return this.state$.subscribe(callback).unsubscribe;
    }
}
exports.Store = Store;
function createStore(config) {
    return new Store(config);
}
exports.createStore = createStore;
