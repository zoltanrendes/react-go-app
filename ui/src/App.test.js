import React from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";

import App from "./App";

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

mock.onGet("/hello").reply(200, { text: "World" });

async function updateWrapper(wrapper, amount = 0) {
    await act(async () => {
        wrapper.update();
    });
}

describe("App.js", () => {
    beforeAll(() => jest.spyOn(React, "useEffect").mockImplementation(React.useLayoutEffect));
    afterAll(() => React.useEffect.mockRestore());
    it("it matches snapshot", async () => {
        await act(async () => {
            const wrapper = mount(<App />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    it("returns data when sendMessage is called", async () => {
        let wrapper;

        await act(async () => {
            wrapper = mount(<App />);
        });

        const linkElement = wrapper.find("p");
        wrapper.update();
        expect(linkElement.text()).toBe('Hello, World!');
    });
});
