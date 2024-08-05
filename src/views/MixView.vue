<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
     <MixComp1/>
     <MixComp2/>
  </div>
</template>

<script>
import MixComp1 from '@/components/MixComp1.vue';
import MixComp2 from '@/components/MixComp2.vue';
export default {
  name: 'MixView',
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    MixComp1,
    MixComp2

  }, 
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>