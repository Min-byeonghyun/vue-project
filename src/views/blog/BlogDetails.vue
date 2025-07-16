<script>
export default {
  name: 'BlogDetails',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
<template>
  <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">블로그 디테일 페이지</h1>
  <p>블로그 id : {{ id }}</p>
</template>

<style lang="scss" scoped></style>
