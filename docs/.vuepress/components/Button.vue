<template>
  <div class="GradientButton">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.GradientButton {
  font-size: 20px;
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
  transition: all 0.5s;
  border-radius: 100px;

  &:hover {
    background-position: 100% 50%;
    transform: translateY(-2px);
  }
}
</style>
