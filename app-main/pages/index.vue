<template>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


#subapp {
  min-height: 100vh;
}
</style>
