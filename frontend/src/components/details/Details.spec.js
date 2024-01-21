import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { useRouter } from "vue-router";
import * as courseService from "../../service/course/courseService";
import Details from "./Details.vue";

const router = { push: vi.fn() };

vi.mock("vue-router", () => ({
  useRoute: vi.fn().mockReturnValue({
    params: { id: 1 },
  }),
  useRouter: vi.fn(() => router),
}));

vi.mock("../../service/course/courseService", () => ({
  getOne: vi.fn().mockResolvedValue({
    data: {
      id: 1,
      name: "Technology",
      description: "Simple course to learn",
      coordinador: "Eduardo Marchiori",
      bannerLink: "https://web.whatsapp.com/",
    },
  }),
}));

const mountComponent = async (props) => {
  const wrapper = mount(Details, {
    props,
  });

  await wrapper.vm.$nextTick();

  return wrapper;
};

describe("Details", () => {
  it("should render details title", async () => {
    const wrapper = await mountComponent();
    const title = wrapper.find("h2");

    expect(title.text()).toBe("Informações do Curso");
  });

  it("should get course information on init component", async () => {
    await mountComponent();

    expect(courseService.getOne).toHaveBeenCalledTimes(1);
    expect(courseService.getOne).toHaveBeenCalledWith(1);
  });

  it("should render details with course information", async () => {
    const wrapper = await mountComponent();
    const page = wrapper.findComponent({ name: "Page" });
    const appButton = wrapper.findAllComponents({ name: "ButtonApp" });
    const image = wrapper.find("img");
    const subtitle = wrapper.find("h3");
    const description = wrapper.find("p");
    const coordinadorText = wrapper.find("small");

    await flushPromises();

    expect(page.isVisible()).toBe(true);
    expect(appButton.at(0).isVisible()).toBe(true);
    expect(appButton.at(0).props("text")).toBe("EDITAR");
    expect(appButton.at(1).isVisible()).toBe(true);
    expect(appButton.at(1).props("text")).toBe("EXCLUIR");
    expect(appButton.at(1).props("theme")).toBe("secondary");
    expect(image.isVisible()).toBe(true);
    expect(image.attributes("src")).toBe("https://web.whatsapp.com/");
    expect(subtitle.isVisible()).toBe(true);
    expect(subtitle.text()).toBe("Technology");
    expect(description.isVisible()).toBe(true);
    expect(description.text()).toBe("Simple course to learn");
    expect(coordinadorText.isVisible()).toBe(true);
    expect(coordinadorText.text()).toBe("Cordenador: Eduardo Marchiori");
  });

  it("should change to edit page when user clicks in the edit button", async () => {
    const wrapper = await mountComponent();
    const appButton = wrapper.findAllComponents({ name: "ButtonApp" }).at(0);

    await flushPromises();
    appButton.vm.$emit("click");

    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith({
      path: `/edit/1`,
    });
  });
});
