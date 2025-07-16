<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      blogs: [
        { title: '1번글', id: 1, details: '디테일1' },
        { title: '2번글', id: 2, details: '디테일2' },
        { title: '3번글', id: 3, details: '디테일3' },
      ],
    }
  },
}
</script>
<template>
  <div>
    <h2 class="text-3xl font-medium tracking-tighter text-white sm:text-4xl">블로그 페이지</h2>
    <div class="my-10 inline-block"></div>
    <div v-for="blog in blogs" :key="blog.id">
      <div
        class="bg-gray-300 hover:bg-purple-400 overflow-hidden w-1/3 mx-auto max-w-lg my-5 shadow sm:rounded-lg"
      >
        <div class="px-4 py-5 sm:px-6 cursor-pointer">
          <router-link :to="{ name: 'BlogDetails', params: { id: blog.id } }">
            <h2 class="font-bold text-xl text-gray-900 mt-2">{{ blog.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
