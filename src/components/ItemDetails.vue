<template>
  <v-container class="my-0 py-0">
    <v-row class="tags">
      <v-breadcrumbs :items="tags" class="py-0 mt-0 px-0">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row no-gutters class="item_details">
      <v-col cols="12" lg="9" md="9">
        <v-row no-gutters>
          <v-avatar class="avatar" tile>
            <v-img
              v-if="item.picture"
              :src="item.picture"
              width="680px"
              style="object-fit: contain !important"
            />
          </v-avatar>
        </v-row>
        <v-row no-gutters class="item_description">
          <p class="item_description_title">Descripción del producto</p>
          <p class="item_description_text">
            {{ item.description }}
          </p>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        lg="3"
        md="3"
        :class="{ margin_responsive: $vuetify.breakpoint.smAndDown }"
      >
        <p class="item_quantity">
          {{ item.condition }} - {{ item.sold_quantity }} vendidos
        </p>
        <p class="item_name">{{ item.title }}</p>
        <div class="d-flex">
          <p class="price">
            $
            {{
              new Intl.NumberFormat("de-DE", {
                maximumFractionDigits: 2,
              }).format(item.price.amount)
            }}
          </p>
          <p class="price_decimals">00</p>
        </div>
        <v-btn color="color_type_4" class="text-white sell_button">
          Comprar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemsBox",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data: () => ({
    tags: [],
  }),
  mounted() {
    this.tags = this.item.path_from_root.map((c) => {
      return {
        text: c,
        disabled: true,
        href: "#",
      };
    });
  },
};
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto
.tags
  padding: 0px
  margin-top: 16px
  margin-bottom: 16px
  margin-left: 0px
  margin-right: 0px
.item_details
  background-color: #ffffff
  margin-bottom: 32px
.avatar
  background-color: #EEEEEE
  width: 680px !important
  height: 600px !important
  margin: 32px !important
  border-radius: 4px !important
.item_description
  margin: 32px
.item_description_title
  margin-bottom: 32px
  font-size: 28px
  font-weight: bold
.item_description_text
  margin-bottom: 32px
  color: #999999
  font-size: 16px
.margin_responsive
  margin-left: 32px
  margin-bottom: 32px
.item_quantity
  margin-top: 32px
  margin-bottom: 16px
  font-size: 14px
.item_name
  margin-bottom: 32px
  margin-right: 32px
  font-size: 24px
  font-weight: bold
.price
  margin-bottom: 32px
  font-size: 46px
.price_decimals
  margin-top: 10px
  font-size: 20px
.sell_button
  margin-rigth: 32px
  color: #ffffff
  width: 91%
</style>
