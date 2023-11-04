<script lang="ts">
export const scooby = ["doo", "shaggy", "velma", "fred", "daphne"];
</script>

<script setup lang="ts">
type Props = {
  msg: string;
};

withDefaults(defineProps<Props>(), {
  msg: "Hello World!",
});
</script>

<template>The message: {{ msg }}</template>
