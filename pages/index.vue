<template>
  <div class="main m-0">
    <div class="m-0 shadow-2xl grid">
      <br />
      <br />
      <h1 class="text-4xl ml-28">Hey, I'm</h1>
      <h2 class="font-bold text-5xl ml-28 cursor-pointer">
        <a @click="change()">{{ type }}</a>
      </h2>
      <p class="text-2xl text-gray-200 ml-28">A beginner web dev</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "FunctionalMetatable",
    };
  },
  methods: {
    change() {
      this.type = this.type == "9gr" ? "FunctionalMetatable" : "9gr";
    },
  },
};
</script>
