<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
     <h3>CaculatorView3</h3>
     <input type="text" v-model = "num1" /> <span> + </span>
     <input type="text" v-model = "num2" /> <span> = </span>
     <span> {{ result }}</span>

  </div>
</template>

<script>
import {reactive, computed, toRefs } from 'vue'

function plusNumbers() {
    //반응형 생태객체 : 속성 변경될때 마다 자동으로 DOM 업데이트

    let state = reactive({
      num1: 0,  
      //첫번째 텍스트박스와 바인딩 될 숫자

      num2: 0,
      //두번째 텍스트박스와 바인딩 될 숫자

      result: computed( () => Number(state.num1) + Number(state.num2)),
      // 계산된 결과를 저장할 상태
    })
      return toRefs(state)
      // 반응형 상태객체 -> 일반 자바스크립트 객체
    }

export default {
  name: 'CaculatorView3',

  setup() {
    let {num1, num2, result} = plusNumbers()
    // 구조분해 할당으로 num1, num2, result 값을 얻기

    return { num1, num2, result}
    // 구조분해된 변수값을 반환
    }
  }
 
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>