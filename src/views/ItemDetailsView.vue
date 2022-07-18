<template>
  <ItemDetails v-if="getItem" :item="getItem.item" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ItemDetailsView",
  components: {
    ItemDetails: () => import("../components/ItemDetails.vue"),
  },
  computed: {
    ...mapGetters(["getItem"]),
  },
  methods: {
    ...mapActions(["getItemAction"]),
  },
  async mounted() {
    try {
      this.loading = true;
      this.errorMsg = "";
      const id = this.$router.currentRoute.params.id;
      if (!id || id === "") {
        return null;
      }
      await this.getItemAction(id);
    } catch (error) {
      this.errorMsg = error.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style></style>
