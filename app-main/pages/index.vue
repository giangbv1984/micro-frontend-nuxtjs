<template>
  <div>
    <h2>Welcome to Tellscore</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
} from 'qiankun'
export default {
  mounted() {
    this.init()
  },
  computed: {
    ...mapState(['apps'])
  },
  methods: {
    async init() {
      registerMicroApps(this.apps)
      setDefaultMountApp(this.apps[0].activeRule)
      start()
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>
