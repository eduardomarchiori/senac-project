import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AppHeader from "./header/Header.vue";
import AppContent from "./content/Content.vue";
import AppFooter from "./footer/Footer.vue";
import Default from "./Default.vue";

const mountComponent = (props) => {
  const wrapper = shallowMount(Default, {
    props,
  });
  return wrapper;
};

describe("Default", () => {
  it("should default layout structure", () => {
    const wrapper = mountComponent();
    const headerApp = wrapper.findComponent(AppHeader);
    const footerApp = wrapper.findComponent(AppContent);
    const contentApp = wrapper.findComponent(AppFooter);

    expect(headerApp.isVisible()).toBe(true);
    expect(footerApp.isVisible()).toBe(true);
    expect(contentApp.isVisible()).toBe(true);
  });
});
