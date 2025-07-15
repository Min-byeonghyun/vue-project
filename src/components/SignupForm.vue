<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      password: '',
      role: '',
    }
  },
}
</script>
<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4">
    <div class="w-full max-w-md space-y-8">
      <div class="mt-20">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tighter">회원가입</h2>
      </div>
      <form>
        <label for="email" class=""> Email : </label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="relative block w-full appearance-none rounded-none rounded-t-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placehoder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="이메일 입력"
        />
        <label for="password" class=""> Password : </label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          autocomplete="password"
          required
          class="relative block w-full appearance-none rounded-none rounded-t-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placehoder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="비밀번호 입력"
        />
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="mb-8">
            <label for="Role" class="block font-bold text-sm mb-2"> 직업 </label>
            <select
              v-model="role"
              id="role"
              class="relative block w-full appearance-none rounded-none rounded-t-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placehoder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="프론트엔드 개발자">Front-end Developer</option>
              <option value="백엔드 개발자">Back-end Developer</option>
              <option value="디자이너">Designer</option>
            </select>
          </div>
        </div>
      </form>
      <!-- two-way data binding   -->
      <p class="mt-20 text-sm text-gray-900">Email : {{ email }}</p>
      <p class="mt-20 text-sm text-gray-900">Password : {{ password }}</p>
      <p class="mt-20 text-sm text-gray-900">role : {{ role }}</p>
    </div>
  </div>
</template>

<style></style>
