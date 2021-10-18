import Vue from "vue";

Vue.filter("upper", function (v) {
  return v.toUpperCase();
});

Vue.filter("reverse", function (v) {
  return v.split("").reverse().join("");
});

Vue.filter("capitalize", function (v) {
  return v.slice(0, 1).toUpperCase() + v.slice(1);
});
