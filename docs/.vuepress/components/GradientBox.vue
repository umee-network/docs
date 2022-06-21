<template>
  <div class="GradientBox">
    <slot></slot>
  </div>
</template>

<style lang="css">
.GradientBox {
  position: relative;
  z-index: 1;
  border: none !important;
  padding: 18px 18px 30px;
  width: 100%;
}

.GradientBox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #DDB4FF 0%, #4EFFE5 100%);;
  padding: 1px;
  border-radius: 5px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
</style>
