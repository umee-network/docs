<template>
  <app-link :link="link" :external="external" class="card">
    <gradient-box>
      <div :class="[flex ? 'card-container-flex' : 'card-container']">
        <div class="external-link" v-if="external">
          <img src="/img/external-link.png" />
        </div>

        <div class="img-content"><img :src="img" /></div>
        <div class="card-content">
          <div class="card-content-title">{{ title }}</div>
          <div class="card-content-text">{{ text }}</div>
        </div>
      </div>
    </gradient-box>
  </app-link>
</template>

<script>
import AppLink from "./AppLink.vue";
export default {
  components: { AppLink },
  props: {
    img: "",
    title: "",
    text: "",
    link: "",
    flex: false,
    external: false,
  },
};
</script>

<style lang="scss">
.card > .GradientBox:hover {
  box-shadow: var(--box-shadow);
  transform: translateY(-2px);
}
.card-container-flex {
  display: flex;
  align-items: center;
  padding: 18px 18px 30px;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 18px 18px 30px;

  .card-content-title {
    font-size: 24px;
    font-weight: bold;
  }

  .img-content {
    height: 200px;
    display: flex;
    align-items: center;
  }
}
.external-link {
  width: 100%;
  justify-content: flex-end;
  display: flex;
  margin-bottom: 20px;
}
</style>
