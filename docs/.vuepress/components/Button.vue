<template>
  <div class="GradientButton">
    <slot></slot>
  </div>
</template>

<style lang="css">
.GradientButton {
  font-size: 20px;
  color: #16183C;
  cursor: pointer;
  width: 159px;
  height: 53px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    83.37deg,
    #fda9ff -9.48%,
    #c9b8ff 18.96%,
    #4dffe5 82.13%
  );
  border-radius: 100px;
}
</style>
