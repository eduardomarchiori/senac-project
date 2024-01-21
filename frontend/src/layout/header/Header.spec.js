import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import Header from "./Header.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const mountComponent = (props) => {
  const wrapper = mount(Header, {
    props,
    global: {
      plugins: [router],
    },
  });
  return wrapper;
};

describe("Header", () => {
  it("should render header structure", () => {
    const wrapper = mountComponent();

    const header = wrapper.find("header");
    const image = wrapper.find("img");
    const links = wrapper.findAll("a");

    expect(header.isVisible()).toBe(true);
    expect(image.isVisible()).toBe(true);
    expect(links.at(0).isVisible()).toBe(true);
    expect(links.at(0).attributes("href")).toBe("/");
    expect(links.at(1).isVisible()).toBe(true);
    expect(links.at(1).attributes("href")).toBe("/register");
  });
});
