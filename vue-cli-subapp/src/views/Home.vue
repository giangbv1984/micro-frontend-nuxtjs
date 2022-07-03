<template>
  <div class="home">
    <div>vue-app</div>
    <div>global state: {{ name }}</div>
    <button>update global state to parent</button>
    <button @click="$router.push({ name: 'About' })">About</button>
    <br />
    <img src="../assets/logo.png" alt />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["name"])
  },
  methods: {
    ...mapMutations(["updateParentState"])
  }
};
</script>
