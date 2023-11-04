<script setup lang="ts">
import { onUnmounted, watch } from "vue";

type Props = {
  isOpen: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
});
const emit = defineEmits(["close", "open"]);

const closeModal = () => {
  emit("close");
};

// if open add a backdrop to the body
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="backdrop"></div>'
      );
    } else {
      document.getElementById("backdrop")?.remove();
    }
  }
);

// remove the backdrop when the component is unmounted
onUnmounted(() => {
  document.getElementById("backdrop")?.remove();
});

// add backdrop to the body when open when mounted:
if (props.isOpen) {
  document.body.insertAdjacentHTML("beforeend", '<div id="backdrop"></div>');
}
</script>

<template>
  <div class="modal" v-if="isOpen">
    <!--<div class="modal-overlay"></div>-->
    <div class="modal-content">
      <div class="modal-header">
        <button @click="closeModal">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  max-width: 80vw;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
</style>
