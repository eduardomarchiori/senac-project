import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Page from "./Page.vue";

const mountComponent = (slots) => {
  const wrapper = mount(Page, { slots });
  return wrapper;
};

describe("Page", () => {
  it("should render page with slot content", () => {
    const wrapper = mountComponent({
      default: {
        template: "<span>Content</span>",
      },
    });
    const span = wrapper.find("span");

    expect(span.isVisible()).toBe(true);
    expect(span.text()).toBe("Content");
  });
});
