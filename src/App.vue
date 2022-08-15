<template>
  <div id="main">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: "main-app",
  components: {},
  mounted() {
    let vm = this;
    // tell App to go on home route on initial load
    // vm.$router.push("/");
  },
};
</script>

<style lang="scss">
</style>
