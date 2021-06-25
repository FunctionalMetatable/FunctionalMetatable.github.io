<template>
  <div class="main m-0">
    <div class="m-0 shadow-2xl grid col">
      <br />
      <br />
      <h1 class="text-4xl ml-28">Hey, I'm</h1>
      <h2 class="font-bold text-5xl ml-28 cursor-pointer">
        <a @click="change()">{{ type }}</a>
      </h2>

      <hr class="w-12 h-1 bg-blue-800 rounded-full ml-28 mt-8" />
      <h3 class="text-2xl font-semibold text-gray-700 ml-28">
        {{ devText }}
      </h3>
      <hr class="w-12 h-1 bg-blue-800 rounded-full ml-28 mt-8" />
      <h3 class="text-md font-semibold text-gray-700 ml-28">
        I have {{ repoCount }} repositories on my GitHub.
        <a href="https://github.com/FunctionalMetatable" class="text-blue-700"
          >Check it out!</a
        >
      </h3>
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
      devText: "A beginner web dev.",
      repoCount: 0
    };
  },
  methods: {
    change() {
      this.type = this.type == "9gr" ? "FunctionalMetatable" : "9gr";
      this.devText =
        this.type == "9gr"
          ? "Advanced Topics Forumer on Scratch"
          : "A beginner web dev.";
    }
  },
  async fetch() {
    let res = await fetch(`${process.env.api}/gh/user/FunctionalMetatable`);
    let json = await res.json();

    this.repoCount = json.public_repos;
  },
  fetchOnServer: false
};
</script>
