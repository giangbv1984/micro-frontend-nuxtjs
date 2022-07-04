<template>
  <el-container>
    <el-aside>
      <div class="logo">
        <nuxt-link to="/">
          <img src='~/assets/images/logo.svg' alt="Logo"/>
        </nuxt-link>
      </div>
      <div class="menu-wrap">
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="6" v-for="app in apps" :key="app.name" type="flex">
            <nuxt-link :to="app.activeRule" :class="checkActiveMenu(app.activeRule)">
              <img class="rounded-full" :src='app.icon' alt=''/>
              <span>{{ app.name }}</span>
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
    </el-aside>
    <el-container>
      <el-main>
        <div>
          <div>
            <h2>Welcome to Tellscore</h2>
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
      value:''
    }
  },
  mounted() {
    this.init();
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
    checkActiveMenu(name) {
      return name === this.$route.path ? 'active' : '';
    }
  },
}
</script>

<style >
.el-row{
  margin: 0;
}
.logo {
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: center;
}
.el-aside {
  background: #3f45ff;
}
.el-container{
  height: 100vh;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.menu-wrap a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: white;
  text-decoration: none;
  opacity: 0.54;
}
.menu-wrap a:hover, .menu-wrap a.active {
  opacity: 0.87;
}
</style>
