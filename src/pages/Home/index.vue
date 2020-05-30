<template>
  <div class="w-1/2 mt-10 ml-5">
    <ul class="flex justify-evenly">
      <li class="font-sans text-xl">1. ほげほげ</li>
      <li class="font-sans text-xl">2. ふがふが</li>
      <li class="font-sans text-xl">3. もえもえ</li>
      <li class="font-sans text-xl">4. グエーー</li>
    </ul>
    <div class="flex justify-center">
      <button
        class="w-24 h-8 mt-2 px-22 border border-solid bg-custom-117fa4 text-white rounded-lg outline-none"
      >
        ボタン
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {
  head() {
    return {
      title: 'ホーム',
    }
  }
}
</script>
