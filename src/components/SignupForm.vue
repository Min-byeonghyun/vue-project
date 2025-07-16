<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      tempSkill: '',
      skills: [],
    }
  },
  methods: {
    addSkill($event) {
      if ($event.key === 'Enter' && this.tempSkill.trim()) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
          this.tempSkill = ''
        }
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(item => skill != item)
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
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="mb-8">
            <label for="email" class="block font-bold text-sm mb-2"> Email : </label>
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
          </div>
        </div>
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="mb-8">
            <label for="password" class="block font-bold text-sm mb-2"> Password : </label>
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
          </div>
        </div>
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
        <div class="-space-y-px rounded-md shadow-sm">
          <div class="mb-8">
            <label for="skills" class="block font-bold text-sm mb-2"> Skills(Enter) : </label>
            <input
              v-model="tempSkill"
              @keyup="addSkill"
              type="text"
              class="relative block w-full appearance-none rounded-none rounded-t-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placehoder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <div class="flex flex-wrap">
              <div
                v-for="skill in skills"
                :key="skill"
                class="mt-3 text-xs font-semibold rounded-full py-1 px-4 mx-1 leading-normal bg-indigo-500 text-white hover:bg-gray-900"
              >
                <span @click="deleteSkill(skill)">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="flex my-1 mr-3">
        <input type="checkbox" v-model="terms" required/>
        <label>&nbsp;이용약관에 동의하세요</label>
      </div>
      
    </div>
  </div>
</template>

<style></style>
