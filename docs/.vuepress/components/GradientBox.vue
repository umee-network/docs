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
  padding: 18px 18px 30px;
  width: 100%;
  border-radius: 5px;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: var(--box-shadow);
    transform: translateY(-2px);
  }
}

.GradientBox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #ddb4ff 0%, #4effe5 100%);
  padding: 1px;
  border-radius: 5px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
</style>
