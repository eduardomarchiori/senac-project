import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Card from "./Card.vue";

const mountComponent = (props) => {
  const wrapper = mount(Card, { props });
  return wrapper;
};

describe("Card", () => {
  it("should render card structure with default values", () => {
    const defaultBannerLink =
      "https://ufpr.br/wp-content/uploads/ac_assets/uc_post_list//placeholder.jpeg";
    const defaultTitle = "Título";
    const defaultInfo = "Breve informação";
    const wrapper = mountComponent();

    const divParent = wrapper.findAll("div");
    const divImage = wrapper.findAll("div");
    const image = wrapper.find("img");
    const title = wrapper.find("h3");
    const info = wrapper.find("span");

    expect(divParent.at(0).isVisible()).toBe(true);
    expect(divParent.at(0).classes()).not.toContain("not-clickable");
    expect(divImage.at(0).isVisible()).toBe(true);
    expect(image.isVisible()).toBe(true);
    expect(image.attributes()).toMatchObject({
      alt: "banner",
      height: "120",
      src: defaultBannerLink,
    });
    expect(title.isVisible()).toBe(true);
    expect(title.text()).toBe(defaultTitle);
    expect(info.isVisible()).toBe(true);
    expect(info.text()).toBe(defaultInfo);
  });

  it("should render card with title provided", () => {
    const wrapper = mountComponent({ title: "New Title" });
    const title = wrapper.find("h3");

    expect(title.text()).toBe("New Title");
  });

  it("should render card with info provided", () => {
    const wrapper = mountComponent({ info: "Information" });
    const info = wrapper.find("span");

    expect(info.text()).toBe("Information");
  });

  it("should render card with banner link provided", () => {
    const wrapper = mountComponent({ bannerLink: "https://google.com" });
    const image = wrapper.find("img");

    expect(image.attributes("src")).toBe("https://google.com");
  });

  it("should render not clickable card ", () => {
    const wrapper = mountComponent({ clickable: false });
    const divParent = wrapper.findAll("div");

    expect(divParent.at(0).classes()).toContain("not-clickable");
  });
});
