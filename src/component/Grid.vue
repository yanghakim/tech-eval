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
        <el-col :span="8"
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
    ...mapActions(["fetchUsers"])
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap')
.grid
  width: 95vw

  display: flex
  flex-direction: column
  justify-content: center

  padding: 10px

  background: white

  border: 10px solid #EAABDB
  box-shadow: 0 0 5px darken(#EAABDB, 25%)

  &-header
    border-radius: 4px
    min-height: 36px
    display: flex
    align-items: center
    justify-content: center

    border: 1px solid #EAABDB
    background: #EAABDB

    color: white
    font-size: 1em
    letter-spacing: 2px
    text-align: center

  &-content
    border-radius: 4px
    min-height: 36px
    display: flex
    align-items: center
    justify-content: center

    border: 1px solid #EAABDB

    color: #EAABDB
    letter-spacing: 2px
    font-size: 0.9em
    text-align: center

    cursor: text
    transition: 0.5s ease

    &:hover
      border: 1px dashed #EAABDB

    &-input
      height: 100%
      width: 100%
      outline: none
      border: none
      background: none

      text-align: center
      font-size: 1em

      color: #EAABDB

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
      border: 1px solid #EAABDB

    &::-webkit-scrollbar-thumb
      background: #EAABDB

.el-row
  margin-bottom: 20px
  &:last-child
    margin-bottom: 0

.el-col
  border-radius: 4px
</style>
