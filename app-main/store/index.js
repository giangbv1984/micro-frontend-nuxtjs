import {
  initGlobalState,
} from 'qiankun';

const TYPES = {
  INIT_APPS: 'init_apps'
}

export const state = () => ({
  apps: [],
  user: {name: 'Admin'},
  sdk: null
})

export const mutations = {
  [TYPES.INIT_APPS](state, apps) {
    const actions = initGlobalState({
      user: state.user,
    })
    const sdk = {
      globalState: actions,
      go2404: () => {
        this.$router.push('404')
      },
      user: state.user
    }
    apps = apps.map((item) => ({
      ...item,
      container: '#sub-app',
      props: {
        sdk,
      },
    }))
    const routes = apps.map((item, i) => ({
      path: `${item.activeRule}(.*)`,
      name: `${item.name}-${i}`,
      component: () => import('@/pages/index.vue').then(m => m.default || m)
    }))
    this.$router.addRoutes([].concat(...routes,
      {
        path: `*`,
        name: `404`,
        component: () => import('@/pages/404.vue').then(m => m.default || m)
      }
    ))

    state.apps = apps
    state.sdk = sdk
  }
}

export const actions = {
  async getMenus({commit}) {
    const {payload} = await getMenus()

    commit(TYPES.INIT_APPS, payload)
  }
}


async function getMenus() {

  return {
    code: 0,
    payload: [
      {
        icon: require('../assets/images/menu-user-mail.svg'),
        name: 'Campaign',
        activeRule: '/campaign',
        entry: 'http://127.0.0.1:7102/',
      },
      {
        icon: require('../assets/images/menu-user-account.svg'),
        name: 'User',
        activeRule: '/user',
        entry: 'http://127.0.0.1:7103/',
      },
      {
        icon: require('../assets/images/menu-user-announce.svg'),
        name: 'Job',
        activeRule: '/job',
        entry: 'http://127.0.0.1:7101/',
      },
    ],
    message: 'success',
  }

}
