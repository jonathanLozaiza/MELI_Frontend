<template>
  <v-app>
    <v-app-bar app color="primary" elevation="0">
      <SearchBox />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
export default {
  name: "App",
  components: {
    SearchBox,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="sass" scoped>
main
  background-color: #EEEEEE
</style>
