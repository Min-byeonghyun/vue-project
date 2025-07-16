<script setup></script>

<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-600 items-center h-screen">
    <nav class="bg-gray-900">
      <div class="py-6 mx-auto flex justify-center items-center">
        <router-link class="text-3xl font-bold text-white mr-10 hover:text-purple-500" to="/">HOME</router-link>
        <router-link class="text-3xl font-bold text-white mr-10 hover:text-purple-500" to="blogs">Blog</router-link>
        <router-link class="text-3xl font-bold text-white mr-10 hover:text-purple-500" to="signup">signup</router-link>
      </div>
    </nav>
    <div class="mx-auto text-center lg:py-32">
      <router-view />
    </div>
  </div>
</template>
