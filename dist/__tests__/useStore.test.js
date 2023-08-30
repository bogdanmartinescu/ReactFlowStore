"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const index_1 = require("../index");
describe("useStore", () => {
    it("should retrieve state from the store", () => __awaiter(void 0, void 0, void 0, function* () {
        const testStore = (0, index_1.createStore)({
            state: { testValue: "Hello" },
        });
        const TestComponent = () => {
            const testValue = (0, index_1.useStore)("testValue");
            return react_1.default.createElement("div", null, testValue);
        };
        const { getByText } = (0, react_2.render)(react_1.default.createElement(index_1.ReactFlowStoreProvider, { store: testStore },
            react_1.default.createElement(TestComponent, null)));
        yield (0, react_2.waitFor)(() => {
            expect(getByText("Hello")).toHaveLength(1);
        });
    }));
    // ... you can continue to add more tests for other functionalities or edge cases.
});
