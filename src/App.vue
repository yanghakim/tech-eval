<template>
  <div id="app">
    <AddUser />
    <Grid />
  </div>
</template>

<script>
import Grid from "./component/Grid.vue";
import AddUser from "./component/AddUser.vue";

export default {
  name: "App",
  components: {
    Grid,
    AddUser
  }
};
</script>

<style lang="sass">
@keyframes fadeOut
  0%
    filter: brightness(1)
  100%
    transform: scale(1.1)
    filter: brightness(60%)

*
  font-family: "Quicksand", sans-serif
  padding: 0
  box-sizing: border-box

body
  background: darken(#EAABDB, 5%)

  height: 100vh

  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  overflow: hidden
</style>
