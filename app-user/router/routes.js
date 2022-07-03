const BASE = window.__POWERED_BY_QIANKUN__ ? '/user' : ''

function dynamicImport(path) {
  return import(`~/pages/${path}/index.vue`).then(m => m.default || m)
}

const resolveRoute = route => ({
  ...route,
  component: () => dynamicImport(route.component),
})

function dynamicImportRoute(routes) {
  return routes.map(route => ({
    ...resolveRoute(route),
    children: route.children ? route.children.map(resolveRoute) : [],
  }))
}

let routes = [
  {
    path: `${BASE}/home`,
    name: 'Home',
    component: 'home',
    alias: `${BASE}`
  },
  {
    path: `${BASE}/about`,
    name: 'About',
    component: 'about',
  },
]

export default dynamicImportRoute(routes)
