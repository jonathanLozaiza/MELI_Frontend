import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#FFE600",
        secondary: "#EEEEEE",
        color_type_1: "#333333",
        color_type_2: "#666666",
        color_type_3: "#999999",
        color_type_4: "#3483FA",
      },
    },
  },
});
