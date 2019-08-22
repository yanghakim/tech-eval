<!--
  APP VIEW:
  * Header (App Title)
  * Add User Component (Form)
  * Grid Layout (Dynamically Diplays Users) Component
  * Subheader (Author Name)
  * Undo Deletion Button (Displays When Appropriate)
-->

<template>
  <div id="app">
    <p class="app-header">EncaptureMD Eval</p>
    <AddUser />
    <Grid />
    <p class="app-subheader">Yangha Kim</p>

    <transition>
      <p class="app-undo" v-if="deletion" @click="undoDelete(deletion)">
        Undo Deletion
      </p>
    </transition>
  </div>
</template>

<!--
  STATE MANAGEMENT:
  * Adding User when UNDO DELETION is clicked
  ** Retreives stored User array from store
  ** Clears queue and button rendering
-->
<script>
import { mapGetters, mapActions } from "vuex";

import Grid from "./component/Grid.vue";
import AddUser from "./component/AddUser.vue";

export default {
  name: "App",
  components: {
    Grid,
    AddUser
  },
  methods: {
    ...mapActions(["addUser"]),
    ...mapActions(["clearDeletionQueue"]),
    undoDelete(user) {
      this.addUser(user);
      this.clearDeletionQueue();
    }
  },
  computed: mapGetters(["deletion"])
};
</script>

<!--
  TRANSITIONS:
  * For UNDO DELETION button
-->
<style lang="sass">

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes fadeOut
  0%
    opacity: 1
  100%
    opacity: 0

.v-enter-active
  animation: fadeIn 1s forwards

.v-leave-active
  animation: fadeOut 1s forwards

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

  @media(max-width: 1000px)
    font-size: 0.8em

.app
  &-header
    color: lighten(#FFCDB2, 15%)
    margin-bottom: 20px
    font-size: 2em
    letter-spacing: 5px

  &-subheader
    color: lighten(#FFCDB2, 15%)
    margin-top: 20px
    letter-spacing: 5px
    float: right

  &-undo
    padding: 5px
    border-radius: 5px

    box-shadow: 0 0 5px darken(#FFCDB2, 35%)

    background: white
    color: darken(#FFCDB2, 15%)
    border: 1px solid darken(#FFCDB2, 15%)

    cursor: pointer
    transition: 0.5s ease

    position: absolute

    &:hover
      border: 1px solid white
      color: white
      background: darken(#FFCDB2, 15%)
</style>
