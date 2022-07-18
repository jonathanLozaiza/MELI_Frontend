<template>
  <v-card class="item" elevation="0" @click="getItem">
    <div class="d-flex">
      <v-avatar v-if="$vuetify.breakpoint.mdAndUp" class="avatar" tile>
        <v-img v-if="item.picture" :src="item.picture" class="item_picture">
        </v-img>
      </v-avatar>
      <div :style="`width:100%`">
        <v-avatar v-if="$vuetify.breakpoint.smAndDown" class="avatar" tile>
          <v-img v-if="item.picture" :src="item.picture" class="item_picture">
          </v-img>
        </v-avatar>
        <v-row no-gutters>
          <v-col cols="12" lg="6" md="6">
            <div class="d-flex">
              <p class="item_price">
                $
                {{
                  new Intl.NumberFormat("de-DE", {
                    maximumFractionDigits: 2,
                  }).format(item.price.amount)
                }}
              </p>
              <div
                v-if="item.free_shipping"
                role="img"
                class="mx-2 item_shipping"
              >
                <v-img src="@/assets/ic_shipping.png" contain />
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <p class="item_address">{{ item.state_name }}</p>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" lg="6" md="6">
            <p class="item_description">
              {{ item.title }}
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="pa-0 mx-4">
      <v-divider />
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {
          name: "test",
        };
      },
    },
  },
  methods: {
    getItem() {
      this.$router.push({ name: "itemDetails", params: { id: this.item.id } });
    },
  },
};
</script>

<style lang="sass" scoped>
.item
  border-radius: 0px
.avatar
  background-color: #EEEEEE
  width: 220px !important
  height: 180px !important
  margin: 16px !important
  border-radius: 4px !important
  cursor: pointer
.item_picture
  object-fit: contain !important
.item_price
  font-size: 24px
  margin-top: 32px
  margin-bottom: 32px
.item_shipping
  margin-top: 40px
  margin-bottom: 32px
.item_address
  margin-top: 43px
  margin-bottom: 32px
  font-size: 12px
  text-align: center !important
.item_description
  font-size: 18px
</style>
