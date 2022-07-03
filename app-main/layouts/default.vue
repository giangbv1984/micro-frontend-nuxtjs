<template>
  <el-container>
    <el-aside width="200px">
      <div class="menu-wrap">
        <ul>
          <li v-for="app in apps" :key="app.name">
            <nuxt-link :to="app.activeRule">{{app.name}}</nuxt-link>
          </li>
        </ul>
      </div>
    </el-aside>
    <el-container>
      <el-header>Tellscore</el-header>
      <el-main>
        <div>
          <div>
            <div class="state-wrap">
              <input type="text" v-model="value" />
              <button @click="handleChange">change global value</button>
            </div>
            <div id="sub-app"></div>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>


<script>
import { mapState } from 'vuex'
import {
  registerMicroApps,
  start,
} from 'qiankun'
export default {
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    ...mapState(['apps', 'sdk']),
  },
  methods: {
    async init() {
      registerMicroApps(this.apps)
      start()
    },

    handleChange() {
      this.sdk.globalState.setGlobalState({
        name: this.value,
      })
    },
  },
}
</script>


<style >
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.state-wrap,
.menu-wrap {
  text-align: center;
}

.menu-wrap > ul {
  list-style: none;
}
</style>
