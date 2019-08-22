<!--
  ADD USER VIEW:
  * Title (+ add user)
  * Notice (Dynamic rendering of error for duplicate user emails)
  * Form (Name, Username, Email fields)
  * Submit Button (Form Handler)
-->
<template>
  <div class="add">
    <div class="add__heading">
      <p class="add__heading-header">+ add user</p>
      <p class="add__heading-notice">{{ notice }}</p>
    </div>
    <form class="add__form" @submit="onSubmit">
      <input
        class="add__form-input"
        type="text"
        v-model="name"
        placeholder="Name"
      />
      <input
        class="add__form-input"
        type="text"
        v-model="username"
        placeholder="Username"
      />
      <input
        class="add__form-input"
        type="email"
        v-model="email"
        placeholder="Email"
      />
      <input class="add__form-submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<!--
  STATE MANAGEMENT:
  * Adding User when SUBMIT button is clicked
  ** Retreives ERROR NOTICE from store
-->
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddUser",
  data() {
    return {
      name: "",
      username: "",
      email: ""
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      e.preventDefault();
      this.addUser([this.name, this.username, this.email]);
    }
  },
  computed: mapGetters(["notice"])
};
</script>

<style lang="sass">
.add
  width: 95vw

  background: (#FFCDB2, 15%)
  padding: 10px

  box-shadow: 0 0 5px darken(#FFCDB2, 25%)

  &__heading
    display: flex
    flex-direction: row
    justify-content: space-between
    margin: 0 0 5px 5px

    &-header
      color: white
      padding: 0 10px 3px 10px
      border-left: 2px solid white

      letter-spacing: 2px

    &-notice
      color: black
      margin-right: 5px

      letter-spacing: 2px

  &__form
    display: grid
    grid-template-columns: 1fr 1fr 1fr 0.5fr
    grid-gap: 5px

    &-input
      width: 100%
      padding: 10px

      border: 1px solid #FFCDB2
      border-radius: 5px

      color: black
      font-size: 1.3em
      letter-spacing: 2px

      outline: none

    &-submit
      padding: 10px

      color: darken(#FFCDB2, 25%)
      font-size: 1.3em
      letter-spacing: 2px

      border: 1px solid darken(#FFCDB2, 25%)
      border-radius: 5px

      outline: none

      cursor: pointer
      transition: 0.5s ease

      &:hover
        background: #FFCDB2
        box-shadow: 0 0 5px darken(#FFCDB2, 25%)
        border: 1px solid white
        color: white
</style>
