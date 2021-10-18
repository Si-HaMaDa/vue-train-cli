import Vue from "vue";

Vue.directive("textStyle", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";

    if (binding.modifiers.bold) el.style.fontWeight = "bold";

    if (binding.modifiers.green) el.style.color = "green";
  },
});
