<template>
  <v-row class="justify-center flex-nowrap" width="100%">
    <div class="mx-4">
      <v-img src="@/assets/Logo_ML.png" />
    </div>
    <div
      class="search_container"
      :style="`width: ${this.$vuetify.breakpoint.smAndDown ? '100%' : '600px'}`"
    >
      <div class="search_input">
        <input
          type="text"
          v-model="search"
          :placeholder="`Nunca dejes de buscar *`"
          hide-details
        />
      </div>
      <div class="ml-n16">
        <v-btn
          background-color="#eeeeee"
          height="39px"
          elevation="0"
          @click="searchItems"
        >
          <div role="img">
            <v-img src="@/assets/ic_Search.png" contain />
          </div>
        </v-btn>
      </div>
    </div>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBox",

  data: () => ({
    search: "",
  }),

  methods: {
    ...mapActions(["getItemsAction"]),
    async searchItems() {
      try {
        this.loading = true;
        this.errorMsg = "";
        if (this.search == "") {
          return null;
        }
        if (this.$router.currentRoute.name !== "items") {
          this.$router.push({ name: "items", query: { q: this.search } });
        } else {
          await this.getItemsAction(this.search);
        }
      } catch (error) {
        this.errorMsg = error.message;
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {},
};
</script>

<style lang="sass" scoped>
.search_container
  display: flex
.search_input
   flex: 1
input
  outline: none
  width: 100%
  display: block
  height: 39px !important
  padding: 7px 60px 9px 15px !important
  border-radius: 2px !important
  background-color: #fff !important
.search_container div button
  border-top-left-radius: 0px !important
  border-bottom-left-radius: 0px
</style>
