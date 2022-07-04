<template>
  <div>
    <h2>Create Invite-Only Campaign</h2>
    <button @click="go2about">about</button>
  </div>
</template>

<script>
export default {
  methods: {
    go2about() {
      this.$router.push({ name: 'About'})
    },
  }
}
</script>

<style>

</style>
