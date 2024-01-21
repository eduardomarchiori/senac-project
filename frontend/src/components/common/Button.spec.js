import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

const mountComponent = (props) => {
  const wrapper = mount(Button, { props });
  return wrapper;
};

describe("Button", () => {
  it("should render button with text provided", () => {
    const wrapper = mountComponent({ text: "Save" });
    expect(wrapper.attributes("type")).toBe("button");
    expect(wrapper.text()).toBe("Save");
  });

  it("should render button with primary theme", () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain("primary");
  });

  it("should render button with secondary theme", () => {
    const wrapper = mountComponent({ theme: "secondary" });
    expect(wrapper.classes()).toContain("secondary");
  });
});
