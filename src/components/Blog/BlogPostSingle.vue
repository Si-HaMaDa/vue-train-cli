<template>
  <article class="blog-post" v-if="$route.params.id == post.id">
    <h2 class="blog-post-title">{{ post.title }}</h2>
    <p class="blog-post-meta">
      {{ post.date }} by <a href="#">{{ post.auther }}</a>
    </p>
    <h5 class="blog-post-cat">
      <a href="#">{{ post.category }}</a>
    </h5>
    <p class="lead">{{ post.body }}</p>
  </article>
</template>

<script>
export default {
  name: "BlogPostSingle",
  data: function () {
    return {
      my: "My Post Single",
    };
  },
  props: ["post"],
};
</script>
