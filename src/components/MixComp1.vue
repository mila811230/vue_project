<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
     <h2>콘포넌트 1</h2>
     <p>{{ sharedData }}</p>
     <button @click = "sharedMethod">공유메서드</button>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins/commonMixin';
export default {
  name: 'MixComp1',
  mixins: [commonMixin],
  mounted() {
    console.log('컴포넌트1 mounted')
  },
  unmounted() {
    console.log('콤포넌트1 mounted')
  },
  
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>