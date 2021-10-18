<template>
  <div class="col-md-12">
    <div
      class="
        row
        g-0
        border
        rounded
        overflow-hidden
        flex-md-row
        mb-4
        shadow-sm
        h-md-250
        position-relative
      "
    >
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">{{
          post.category
        }}</strong>
        <h3 class="mb-0">{{ post.name }}</h3>
        <div class="mb-1 text-muted">{{ post.date }}</div>
        <p class="card-text mb-auto">
          {{ post.content | short(150) }}
        </p>
        <router-link to="/blogSingle" class="stretched-link"
          >Continue reading</router-link
        >
      </div>
      <div class="col-auto d-none d-lg-block">
        <svg
          class="bd-placeholder-img"
          width="200"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  data: function () {
    return {
      my: "My Post",
    };
  },
  props: ["post"],
  filters: {
    short: function (v, len) {
      return v.slice(0, len) + " ...";
    },
  },
};
</script>
