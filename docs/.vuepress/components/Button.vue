<script setup lang="ts">
defineEmits(["onClick"]);
</script>


<template>
  <button class="GradientButton" @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.GradientButton {
  font-size: 17px;
  color: #16183c;
  cursor: pointer;
  width: 159px;
  height: 53px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(90deg, #fda9ff, #c9b8ff 14%, #4dffe5 50%);
  background-size: 170% 50%;
  transition: background-position 2s, transform 0.5s;
  border-radius: 100px;
  border: none;

  &:hover {
    background-position: 100% 50%;
    transform: scale(1.02);
    transition: background-position 0.5s;
  }

  &:active {
    transition: all 0.2s;
    background-position: initial;
    transform: scale(1);
  }
}
</style>
