<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.page.title,
    };
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content("blog", slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "This page could not be found" });
      });
    return {
      page,
    };
  },
};
</script>