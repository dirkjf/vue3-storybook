import type { Meta, StoryObj } from "@storybook/vue3";

import _Modal from "./Modal.vue";
import { ref } from "vue";

const meta: Meta<typeof _Modal> = {
  title: "Components/Modal",
  component: _Modal,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export default meta;

export const Modal: StoryObj<typeof _Modal> = {
  args: {
    isOpen: true,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt dolores eligendi id, illum incidunt ipsum modi officia optio quae quisquam rem?",
  },
};
export const InContext = (args: unknown) => ({
  components: { Modal: _Modal },
  setup() {
    const showModal = ref(false);

    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    return {
      args,
      showModal,
      toggleModal,
    };
  },
  template: `
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ex optio perferendis quos recusandae soluta. Accusantium ad cum, dolor doloribus excepturi id illo inventore, mollitia, nostrum quasi quia repudiandae sit tempora temporibus tenetur! Dolore dolores enim esse excepturi numquam officiis quia totam? Excepturi, nostrum. <button @click="toggleModal">Toggle Modal</button>
      <Modal :isOpen="showModal" @close="toggleModal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt dolores eligendi id, illum incidunt ipsum modi officia optio quae quisquam rem?</Modal>
    </div>
  `,
});
