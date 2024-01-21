import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "./Footer.vue";

const mountComponent = (props) => {
  const wrapper = mount(Footer, {
    props,
  });
  return wrapper;
};

describe("Footer", () => {
  it("should render footer structure", () => {
    const wrapper = mountComponent();
    const footer = wrapper.find("footer");

    expect(footer.isVisible()).toBe(true);
    expect(footer.text()).toBe("Todos direitos reservados");
  });
});
