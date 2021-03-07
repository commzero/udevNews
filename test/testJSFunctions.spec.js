import "babel-polyfill";
import { checkForName } from "../src/client/js/nameChecker";
import { handleSubmit, scoreCheck } from "../src/client/js/formHandler";

describe("test functionality", () => {
    test("test function handleSubmit", () => {
        expect(handleSubmit).toBeDefined();
    });
    test('test function scoreCheck', () => {
        expect(scoreCheck).toBeDefined();
    });
    test("test function checkForName", () => {
        expect(checkForName).toBeDefined();
    });
});