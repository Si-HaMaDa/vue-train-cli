<template>
  <div class="contact">
    <h1>Contact us</h1>
    <h3>to get in touch with us:</h3>
    <p v-italy>
      {{
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia
      eveniet, dolores asperiores nemo vitae veritatis, numquam nam, voluptatem
      quaerat quam recusandae ex vero sint reprehenderit tempore fugiat sunt
      possimus?`
          | reverse
          | short(10)
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: "contact",
  filters: {
    short: function (v, len) {
      return v.slice(0, len) + " ...";
    },
  },
  directives: {
    italy: {
      bind: function (el) {
        el.style.fontStyle = "italic";
      },
    },
  },
};
</script>
