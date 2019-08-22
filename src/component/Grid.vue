<template>
  <div class="grid">
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-header">name</div></el-col>
      <el-col :span="8"
        ><div class="grid-header">
          username
        </div></el-col
      >
      <el-col :span="8"><div class="grid-header">email</div></el-col>
    </el-row>
    <div class="grid-results">
      <el-row :gutter="20" v-for="user in allUsers" :key="user.email">
        <el-col :span="0.5"
          ><div class="grid-content delete" @click="onDelete(user)">
            -
          </div></el-col
        >
        <el-col :span="7"
          ><div class="grid-content">
            <input
              class="grid-content-input"
              :value="user.name"
              placeholder="edit name"
            /></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content">
            <input
              class="grid-content-input"
              :value="user.username"
              placeholder="edit username"
            /></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content">
            <input
              class="grid-content-input"
              :value="user.email"
              placeholder="edit email"
            /></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Grid",
  methods: {
    ...mapActions(["fetchUsers"]),
    ...mapActions(["deleteUser"]),
    onDelete(user) {
      this.deleteUser([user.name, user.username, user.email]);
    }
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Quicksand|Stalinist+One&display=swap')
.grid
  width: 95vw

  display: flex
  flex-direction: column
  justify-content: center

  padding: 10px

  background: white

  border: 10px solid #FFCDB2
  box-shadow: 0 0 5px darken(#FFCDB2, 25%)

  &-header
    border-radius: 4px
    min-height: 36px
    display: flex
    align-items: center
    justify-content: center

    border: 1px solid darken(#FFCDB2, 25%)
    background: #FFCDB2

    color: darken(#FFCDB2, 45%)
    font-size: 1.1em
    letter-spacing: 2px
    text-align: center

  &-content
    border-radius: 4px
    min-height: 36px
    display: flex
    align-items: center
    justify-content: center

    border: 1px solid darken(#FFCDB2, 30%)

    color: darken(#FFCDB2, 30%)
    letter-spacing: 2px
    font-size: 0.9em
    text-align: center

    cursor: text
    transition: 0.5s ease

    &:hover
      border: 1px dashed darken(#FFCDB2, 30%)

    &.delete
      border-radius: 4px
      display: flex
      align-items: center
      justify-content: center

      padding: 5px 10px 1px 10px

      margin-left: 0px
      margin-right: -5px
      color: darken(#FFCDB2, 30%)
      background: #FFCDB2
      font-size: 0.9em
      font-family: 'Stalinist One', cursive

      cursor: pointer
      transition: 0.5s ease

      &:hover
        color: black
        background: white
        border: 1px dashed black

    &-input
      height: 100%
      width: 100%
      outline: none
      border: none
      background: none

      text-align: center
      font-size: 1em
      letter-spacing: 2px

      color: darken(#FFCDB2, 30%)

      &::placeholder
        color: grey

  &-results
    max-height: 35vw
    overflow-y: auto
    overflow-x: hidden

    padding-right: 5px

    &::-webkit-scrollbar
      background: none
      width: 5px
      border: 1px solid darken(#FFCDB2, 30%)

    &::-webkit-scrollbar-thumb
      background: darken(#FFCDB2, 30%)

.el-row
  margin-bottom: 20px
  &:last-child
    margin-bottom: 0

.el-col
  border-radius: 4px
</style>
