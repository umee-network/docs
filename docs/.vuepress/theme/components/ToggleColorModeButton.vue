<template>
  <div class="container">
    <a href="https://app.umee.cc/" target="_blank"
      ><Button>Launch App</Button></a
    >
    <div class="dark-mode-widget" @click="toggleDarkTheme">
      <img v-if="darkMode" src="/img/dark-mode.svg" class="theme-toggle" />
      <img v-if="!darkMode" src="/img/light-mode.svg" class="theme-toggle" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  mounted() {
    this.checkUserPreference();
  },
  methods: {
    toggleDarkTheme() {
      const body = window.document.querySelector("html");
      body.classList.toggle("dark");
      //If dark mode is selected
      if (body.classList.contains("dark")) {
        //Save user preference in storage
        localStorage.setItem("dark-theme", "true");
        this.darkMode = true;
        //If light mode is selected
      } else {
        body.classList.remove("dark");
        this.darkMode = false;
        setTimeout(function () {
          localStorage.removeItem("dark-theme");
        }, 100);
      }
    },
    checkUserPreference() {
      //Check Storage on Page load. Keep user preference through sessions
      if (localStorage.getItem("dark-theme")) {
        const body = window.document.querySelector("html");
        body.classList.add("dark");
        this.darkMode = true;
      } else this.darkMode = false;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.dark-mode-widget {
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
}
.theme-toggle {
  width: 22px;
  height: 22px;
}
</style>
