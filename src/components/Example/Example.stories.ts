import type { Meta, StoryObj } from "@storybook/vue3";

import _Example, { scooby } from "./Example.vue";

const meta: Meta<typeof _Example> = {
  title: "Components/Example",
  component: _Example,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

console.log(scooby);

export const Example: StoryObj<typeof _Example> = {
  args: {
    msg: "foo",
  },
};
