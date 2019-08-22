<template>
  <div class="add">
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

<script>
import { mapActions } from "vuex";

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
  }
};
</script>

<style lang="sass">
.add
  width: 95vw

  background: #EAABDB
  padding: 10px

  box-shadow: 0 0 5px darken(#EAABDB, 25%)

  &__form
    display: grid
    grid-template-columns: 1fr 1fr 1fr 0.5fr
    grid-gap: 5px

    &-input
      width: 100%
      padding: 10px

      border: 1px solid #EAABDB
      border-radius: 5px

      color: black
      font-size: 1.3em
      letter-spacing: 2px

      outline: none

    &-submit
      padding: 10px

      color: darken(#EAABDB, 25%)
      font-size: 1.3em
      letter-spacing: 2px

      border: 1px solid darken(#EAABDB, 25%)
      border-radius: 5px

      outline: none

      cursor: pointer
      transition: 0.5s ease

      &:hover
        background: #EAABDB
        box-shadow: 0 0 5px darken(#EAABDB, 25%)
        border: 1px solid white
        color: white
</style>
