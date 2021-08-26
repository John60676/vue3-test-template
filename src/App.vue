<template>
  <div class="mb-40">
    <router-link class="mr-30" to="/">Go to Index</router-link>
    <router-link to="/shop">Go to Shop</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
  components: {},
})
</script>

<style>
.mr-30 {
  margin-right: 30px;
}
.mb-40 {
  margin-bottom: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
