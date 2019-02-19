<template>
  <div>
      <h1>App组件</h1>
      <router-link to="/login">login</router-link>
      <router-link to="/index">index</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>
