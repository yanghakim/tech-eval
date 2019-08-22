<template>
  <div id="app">
    <p class="app-header">EncaptureMD Eval</p>
    <AddUser />
    <Grid />
    <p class="app-subheader">Yangha Kim</p>

    <p class="app-undo" v-if="deletion" @click="undoDelete(deletion)">
      Undo Deletion
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Grid from "./component/Grid.vue";
import AddUser from "./component/AddUser.vue";

export default {
  name: "App",
  methods: {
    ...mapActions(["addUser"]),
    undoDelete(user) {
      this.addUser(user);
    }
  },
  computed: mapGetters(["deletion"]),
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
  background: darken(#FFCDB2, 5%)

  height: 100vh

  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  overflow: hidden

.app
  &-header
    color: lighten(#FFCDB2, 15%)
    margin-bottom: -5px
    font-size: 2em
    letter-spacing: 5px

  &-subheader
    color: lighten(#FFCDB2, 15%)
    margin-top: 0
    letter-spacing: 5px
    float: right

  &-undo
    color: white
    padding: 5px
    border: 1px solid white
    border-radius: 5px

    background: darken(#FFCDB2, 15%)
    box-shadow: 0 0 5px darken(#FFCDB2, 35%)

    cursor: pointer
    transition: 0.5s ease

    position: absolute

    &:hover
      background: white
      color: darken(#FFCDB2, 15%)
      border: 1px solid darken(#FFCDB2, 15%)
</style>
