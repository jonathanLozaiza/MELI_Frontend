<template>
  <ItemsBox />
</template>

<script>
export default {
  name: "SearchResultsView",
  components: {
    ItemsBox: () => import("../components/ItemsBox.vue"),
  },
};
</script>

<style></style>
