<template>
  <div>
    <div class="blog-post-card w-96 shadow-lg">
      <h3 class="text-1xl">Welcome to the blog!</h3>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    let res = await $content("blog")
      .only(["title", "description", "date"])
      .sortBy("date", "desc")
      .fetch();

    return {
      posts: res,
    };
  },
};
</script>