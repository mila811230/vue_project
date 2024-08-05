<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
     <h3>
       CaculatorView1
     </h3>
     <input type="text" v-model = "num1" @keyup = "plusNumbers"/> <span> + </span>
     <input type="text" v-model = "num2" @keyup = "plusNumbers"/> <span> = </span>
     <span> {{ result }}</span>

  </div>
</template>

<script>
export default {
  name: 'CaculatorView1',
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      num1: 0,
      num2: 0,
      result:0,
    }
  },
  watch: {
    // 데이터를 감시하고 처리할 로직을 작성합니다.
    // sample1() {
    //   console.log('')
    // }
  },
  computed: {
    // 필요한 계산된 속성을 정의합니다.
    // sample2() {
    //   return '' 
    // }
  },
  methods: {
    // 컴포넌트에서 사용할 메서드를 정의합니다.
    plusNumbers() {
      this.result = Number(this.num1) + Number(this.num2)
    }
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>