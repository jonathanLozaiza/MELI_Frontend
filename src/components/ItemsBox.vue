<template>
  <v-container class="my-0 py-0">
    <v-row class="tags">
      <v-breadcrumbs :items="tags" class="py-0 mt-0 px-0">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row v-if="getItems" no-gutters class="items">
      <v-col cols="12" v-for="(item, index) of getItems.items" :key="index">
        <Item :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ItemsBox",
  components: {
    Item: () => import("../components/Item.vue"),
  },
  data: () => ({
    tags: [
      {
        text: "Dashboard",
        disabled: true,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: true,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
    items: [{ name: "eminem" }, { name: "riana" }],
  }),
  computed: {
    ...mapGetters(["getItems"]),
  },
  methods: {
    ...mapActions(["getItemsAction"]),
  },
  async mounted() {
    try {
      this.loading = true;
      this.errorMsg = "";
      const query = this.$router.currentRoute.query.q;
      if (query === "") {
        return null;
      }
      await this.getItemsAction(query);
    } catch (error) {
      this.errorMsg = error.message;
    } finally {
      this.loading;
    }
  },
};
</script>

<style lang="sass">
.container
  margin: 0 auto
.tags
  padding: 0px
  margin-top: 16px
  margin-bottom: 16px
  margin-left: 0px
  margin-right: 0px
.items
  background-color: #FFFFFF
  margin-bottom: 32px !important
</style>
