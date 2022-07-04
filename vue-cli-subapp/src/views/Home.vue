<template>
  <div class="home">
    <div><h2>Job</h2></div>
    <div>User: {{ user.name }}</div>
    <button @click="$router.push({ name: 'About' })">About</button>
    <br />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapMutations(["updateParentState"])
  }
};
</script>
