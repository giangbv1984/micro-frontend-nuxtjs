import "../public-path";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/job" : "/",
    mode: "history",
    routes
  });

  router.$store = store;

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function handleStore(props) {
  const { sdk } = props;
  store.$sdk = sdk;

  store.commit("update", {
    name: sdk.name
  });

  if (sdk) {
    sdk.globalState.onGlobalStateChange(({ name }) => {
      console.log("global state", name);
      store.commit("update", {
        name
      });
    });
  }
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  handleStore(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
