<template>
  <div class="GradientBox">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.GradientBox {
  position: relative;
  z-index: 1;
  border: none !important;
  width: 100%;
  border-radius: 5px;
  transition-duration: 0.3s;
}

.GradientBox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(95.01deg,#e6b5fa -2.53%,#43e0fd 102.62%);
  padding: 1px;
  border-radius: 5px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
</style>
