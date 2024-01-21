import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputText from "./InputText.vue";

const mountComponent = (props) => {
  const wrapper = mount(InputText, { props });
  return wrapper;
};

describe("InputText", () => {
  it("should render input text", () => {
    const wrapper = mountComponent({ text: "Save" });
    expect(wrapper.attributes("type")).toBe("text");
  });

  it("should render input text with value", () => {
    const wrapper = mountComponent({ modelValue: "Text" });
    const input = wrapper.find("input");

    expect(input.element.value).toBe("Text");
  });

  it("should emit update value event when input value changes", async () => {
    const wrapper = mountComponent({ modelValue: "Text" });
    const input = wrapper.find("input");

    await input.setValue("some value");

    expect(wrapper.emitted("update:modelValue")[0][0]).toBe("some value");
  });
});
