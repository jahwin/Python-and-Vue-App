<template>
  <div class="home">
    <img alt="Vue logo" src="assets/logo.png" />
    <div id="home_test_color">Hello there</div>
    <button @click="testEll()">Check ell</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    async testEll() {
      console.log(await eel.get_text_in_python()());
    },
  },
};
</script>

<style lang="scss" scoped>
#home_test_color {
  color: blue;
}
</style>
