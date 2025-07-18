<script>
export default {
  name: 'BlogDetails',
  props: ['id'],
  data() {
    return {
      blog: null,
    }
  },
  mounted() {
    fetch('http://localhost:3000/blogs/' + this.id)
      .then((res) => res.json())
      .then((data) => (this.blog = data))
      .then((err) => console.log(err))
  },
}
</script>
<template>
  <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">Blog Detail Page</h1>
  <div v-if="blog">
    <p>{{ blog.title }}</p>
    <p>{{ blog.details }}</p>
  </div>
  <div v-else>...loading</div>
</template>

<style lang="scss" scoped></style>
